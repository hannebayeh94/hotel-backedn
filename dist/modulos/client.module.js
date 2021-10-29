"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_1 = require("../entity/client");
const client_controller_1 = require("../controller/client/client.controller");
const client_service_1 = require("../services/client.service");
const departamentos_1 = require("../entity/departamentos");
const municipios_1 = require("../entity/municipios");
const accommodate_1 = require("../entity/accommodate");
const room_service_1 = require("../services/room.service");
const rooom_1 = require("../entity/rooom");
let ClientModule = class ClientModule {
};
ClientModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([client_1.Client, departamentos_1.Departamentos, municipios_1.Municipios, accommodate_1.Accommodate, rooom_1.Room])],
        controllers: [client_controller_1.ClientController],
        providers: [client_service_1.ClientService, room_service_1.RoomService]
    })
], ClientModule);
exports.ClientModule = ClientModule;
//# sourceMappingURL=client.module.js.map