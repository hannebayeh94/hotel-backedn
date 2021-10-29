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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reception = void 0;
const typeorm_1 = require("typeorm");
let Reception = class Reception {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reception.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "apellidos", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "telefono", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reception.prototype, "cedula", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "fecha_nacimiento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "correo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "fecha_contrato", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reception.prototype, "salario", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "username", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Reception.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Reception.prototype, "id_type_user", void 0);
Reception = __decorate([
    typeorm_1.Entity()
], Reception);
exports.Reception = Reception;
//# sourceMappingURL=reception.js.map