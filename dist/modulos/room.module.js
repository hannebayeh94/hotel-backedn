"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("../services/room.service");
const typeorm_1 = require("@nestjs/typeorm");
const rooom_1 = require("../entity/rooom");
const room_controller_1 = require("../controller/room/room.controller");
const accommodate_1 = require("../entity/accommodate");
const client_1 = require("../entity/client");
const client_service_1 = require("../services/client.service");
const departamentos_1 = require("../entity/departamentos");
const municipios_1 = require("../entity/municipios");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([rooom_1.Room, accommodate_1.Accommodate, departamentos_1.Departamentos, municipios_1.Municipios, client_1.Client])],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService, client_service_1.ClientService]
    })
], RoomModule);
exports.RoomModule = RoomModule;
//# sourceMappingURL=room.module.js.map