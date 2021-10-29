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
exports.ReceptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reception_1 = require("../../entity/reception");
let ReceptionService = class ReceptionService {
    constructor(receptionRepository) {
        this.receptionRepository = receptionRepository;
    }
    saveReception(reception) {
        return this.receptionRepository.createQueryBuilder().insert().into(reception_1.Reception).values({
            nombre: reception.nombre,
            apellidos: reception.apellidos,
            telefono: reception.telefono,
            cedula: reception.cedula,
            fecha_nacimiento: reception.fecha_nacimiento,
            correo: reception.correo,
            fecha_contrato: reception.fecha_contrato,
            salario: reception.salario,
            username: reception.username,
            password: reception.password,
            id_type_user: reception.id_type_user
        }).execute();
    }
    queryIdentificationcardByReception(identificationcard) {
        return this.receptionRepository.createQueryBuilder('reception').where("reception.cedula = :cedula", { cedula: identificationcard }).getOne();
    }
};
ReceptionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(reception_1.Reception)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReceptionService);
exports.ReceptionService = ReceptionService;
//# sourceMappingURL=reception-service.js.map