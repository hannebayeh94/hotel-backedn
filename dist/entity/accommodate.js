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
exports.Accommodate = void 0;
const index_1 = require("typeorm/index");
let Accommodate = class Accommodate {
};
__decorate([
    index_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Accommodate.prototype, "id", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Accommodate.prototype, "origin", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Accommodate.prototype, "number_room", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", Number)
], Accommodate.prototype, "number_day", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", Number)
], Accommodate.prototype, "number_persons", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", String)
], Accommodate.prototype, "stay", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", Boolean)
], Accommodate.prototype, "state", void 0);
__decorate([
    index_1.Column(),
    __metadata("design:type", Number)
], Accommodate.prototype, "id_client", void 0);
Accommodate = __decorate([
    index_1.Entity()
], Accommodate);
exports.Accommodate = Accommodate;
//# sourceMappingURL=accommodate.js.map