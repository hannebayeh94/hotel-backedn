"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeUser_1 = require("../../entity/typeUser");
const type_user_service_1 = require("../../services/user-service/type-user.service");
const user_service_1 = require("../../services/user/user-service");
const user_type_user_1 = require("../../interface/user-type-user");
const reception_service_1 = require("../../services/reception/reception-service");
let UserController = class UserController {
    constructor(_typeUser, _user, _reception) {
        this._typeUser = _typeUser;
        this._user = _user;
        this._reception = _reception;
    }
    async createTypeUser(user, res) {
        let id = null;
        let response = null;
        if (await this.getUser(user) != null) {
            res.status(301).send({
                message: await this.getUser(user)
            });
            return;
        }
        let hash = bcrypt.hashSync(user.password, 10);
        try {
            const save = await this._typeUser.saveTypeUser({
                id: null,
                type: user.type,
                username: user.username,
                password: hash
            });
            id = save.generatedMaps[0].id;
        }
        catch (e) {
            throw "Error al guardar el tipo de usuario en la base de datos";
        }
        if (id != null) {
            try {
                await this.createUser({
                    id: null,
                    nombre: user.nombre,
                    apellidos: user.apellidos,
                    cedula: user.cedula,
                    correo: user.correo,
                    telefono: user.telefono,
                    id_type_user: id
                });
                user.password = null;
                response = user;
            }
            catch (e) {
                throw "Error al guardar el usuario en la base de datos";
            }
        }
        return res.status(200).send(response);
    }
    createUser(user) {
        return this._user.saveUser(user);
    }
    async login(param) {
        let data = null;
        let responseLogin = false;
        try {
            data = await this._typeUser.getLogin(param.username);
        }
        catch (e) {
            console.log('Error al consultar las credenciales del usuario');
        }
        if (typeof data !== 'undefined') {
            try {
                responseLogin = await bcrypt.compare(param.password, data.password);
                data.password = null;
            }
            catch (e) {
                console.log('Error al comparar la contraseña con el bcrypt');
            }
        }
        return { data: responseLogin, user: data };
    }
    async getUser(user) {
        let userdb = null;
        let identificationcarddb = null;
        let emaildb = null;
        try {
            userdb = await this._typeUser.getLogin(user.username);
        }
        catch (e) {
            throw 'Error al consultar las credenciales del usuario';
        }
        if (userdb != null) {
            if (userdb.username == user.username) {
                return 'El usuario ya existe en el sistema';
            }
        }
        try {
            identificationcarddb = await this._user.queryIdentificationcard(user.cedula);
        }
        catch (e) {
            throw 'Error al consultar la cedula del usuario';
        }
        if (identificationcarddb != null) {
            if (identificationcarddb.cedula == user.cedula) {
                return 'La cedula que estas ingresando ya existe en el sistema';
            }
        }
        try {
            emaildb = await this._user.queryEmail(user.correo);
        }
        catch (e) {
            throw 'Error al consultar el correo';
        }
        if (emaildb != null) {
            if (emaildb.correo == user.correo) {
                return 'El correo que estas ingresando ya existe en el sistema';
            }
        }
        return null;
    }
    async createReception(receptionDto, res) {
        let id = null;
        let response = null;
        try {
            let identificationcard = await this._reception.queryIdentificationcardByReception(receptionDto.cedula);
            if (identificationcard != null) {
                if (identificationcard.cedula == receptionDto.cedula) {
                    res.status(301).send({
                        message: 'La cedula que estas ingresando ya existe en el sistema'
                    });
                }
                return;
            }
        }
        catch (e) {
            throw 'Error al consultar el cedula';
        }
        try {
            let user = await this._typeUser.getLogin(receptionDto.username);
            if (user != null) {
                if (user.username == receptionDto.username) {
                    res.status(301).send({
                        message: 'El usuario que estas ingresando ya existe en el sistema'
                    });
                }
                return;
            }
        }
        catch (e) {
            throw 'Error al consultar el usuario';
        }
        const hash = bcrypt.hashSync(receptionDto.password, 10);
        try {
            const saveType = await this._typeUser.saveTypeUser({
                id: null,
                type: 'reception',
                username: receptionDto.username,
                password: hash
            });
            id = saveType.generatedMaps[0].id;
        }
        catch (e) {
            throw "Error al guardar el tipo de usuario en la base de datos";
        }
        if (id != null) {
            try {
                await this._reception.saveReception({
                    id: null,
                    nombre: receptionDto.nombre,
                    apellidos: receptionDto.apellidos,
                    telefono: receptionDto.telefono,
                    cedula: receptionDto.cedula,
                    fecha_nacimiento: receptionDto.fecha_nacimiento,
                    correo: receptionDto.correo,
                    fecha_contrato: receptionDto.fecha_contrato,
                    salario: receptionDto.salario,
                    username: receptionDto.username,
                    password: receptionDto.password,
                    id_type_user: id
                });
                receptionDto.password = null;
                response = receptionDto;
            }
            catch (e) {
                throw "Error al guardar el usuario en la base de datos";
            }
        }
        return res.status(200).send(response);
    }
};
__decorate([
    common_1.Post('create-type-user'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_type_user_1.UserTypeUser, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createTypeUser", null);
__decorate([
    common_1.Get('login/:username/:password'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeUser_1.TypeUser]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    common_1.Post('create-reception'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createReception", null);
UserController = __decorate([
    common_1.Controller('type-user'),
    __metadata("design:paramtypes", [type_user_service_1.TypeUserService,
        user_service_1.UserService,
        reception_service_1.ReceptionService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map