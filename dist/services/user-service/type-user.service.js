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
exports.TypeUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeUser_1 = require("../../entity/typeUser");
const typeorm_2 = require("typeorm");
let TypeUserService = class TypeUserService {
    constructor(connection, typeUserRepository) {
        this.connection = connection;
        this.typeUserRepository = typeUserRepository;
    }
    saveTypeUser(user) {
        return this.typeUserRepository.createQueryBuilder().insert().into(typeUser_1.TypeUser).values({
            type: user.type, username: user.username, password: user.password
        }).execute();
    }
    getLogin(username) {
        return this.typeUserRepository.createQueryBuilder('type_user')
            .where("type_user.username = :username", { username }).getOne();
    }
};
TypeUserService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(typeUser_1.TypeUser)),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        typeorm_2.Repository])
], TypeUserService);
exports.TypeUserService = TypeUserService;
//# sourceMappingURL=type-user.service.js.map