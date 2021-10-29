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
exports.ClientController = void 0;
const moment = require("moment");
const common_1 = require("@nestjs/common");
const client_service_1 = require("../../services/client.service");
const room_service_1 = require("../../services/room.service");
let ClientController = class ClientController {
    constructor(_client, _room) {
        this._client = _client;
        this._room = _room;
    }
    async createClient(client) {
        let { name, telephone, type_document, identificationcard, date_of_expedition, origin, number_room, number_day, number_persons, registration_date } = client;
        const room = await this._room.queryRoom(number_room);
        if (room.state) {
            return { state: false, error: 'La habitación ya no esta disponible' };
        }
        let stay = moment(new Date()).unix();
        stay = stay.toString();
        try {
            let _id = null;
            let client = await this._client.queryClient(identificationcard);
            if (client != null) {
                _id = client.id;
            }
            else {
                const saveClient = await this._client.saveClient({ id: null, name, telephone, type_document, identificationcard, date_of_expedition, registration_date });
                let { id } = saveClient.generatedMaps[0];
                _id = id;
            }
            await this._client.saveAccommodate({ id: null, origin, number_room, number_day, number_persons, stay, state: true, id_client: _id });
            await this._room.updateStateRoom(true, room.number_room);
        }
        catch (e) {
            throw 'Error al guardar, comprueba si la base de datos esta activa';
        }
        return { state: true, client };
    }
    async listDeparment() {
        return await this._client.queryListDeparment();
    }
    async getListCityOrMunicipality(id) {
        return await this._client.queryListCityOrMunicipalityById(id);
    }
    async getClient(identificationcard) {
        const client = await this._client.queryClient(identificationcard);
        if (client != null) {
            return { client };
        }
        else {
            return { client: null };
        }
    }
    async getClientById(id) {
        return await this._client.queryClientById(id);
    }
    async updateClientAccommodateById(param) {
        return await this._client.updateClietAccommodateById(param.id_client, param.state);
    }
};
__decorate([
    common_1.Post('create-client'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "createClient", null);
__decorate([
    common_1.Get('list-deparment'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "listDeparment", null);
__decorate([
    common_1.Get('getCityOrMunicipality/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getListCityOrMunicipality", null);
__decorate([
    common_1.Get('getClient/:identificationcard'),
    __param(0, common_1.Param('identificationcard')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClient", null);
__decorate([
    common_1.Get('getClientById/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "getClientById", null);
__decorate([
    common_1.Get('update-room/:id_client/:state'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClientController.prototype, "updateClientAccommodateById", null);
ClientController = __decorate([
    common_1.Controller('client'),
    __metadata("design:paramtypes", [client_service_1.ClientService, room_service_1.RoomService])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map