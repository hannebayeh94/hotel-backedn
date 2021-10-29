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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("../../services/room.service");
const rooom_1 = require("../../entity/rooom");
const client_service_1 = require("../../services/client.service");
let RoomController = class RoomController {
    constructor(_room, _client) {
        this._room = _room;
        this._client = _client;
    }
    async createRoom(roomDto) {
        if (await this._room.queryRoom(roomDto.number_room) != null) {
            return { state: false };
        }
        await this._room.saveRoom(roomDto);
        return { state: true, room: roomDto };
    }
    async getListRoom() {
        return this._room.queryListRoom();
    }
    async listStateRooms(state) {
        return await this._room.queryStateRooms(state);
    }
    async getAccommodateRoom(param) {
        const room = await this._room.queryRoomAccommodate(param.room, param.state);
        if (room != null) {
            return { room };
        }
        else {
            return { room: null };
        }
    }
    async updateRoom(param) {
        return await this._room.updateStateRoomById(param.id, param.state);
    }
    async report(date) {
        const accommodateArray = await this._room.queryAllAccommodateRoom(date.state);
        let reports = [];
        if (accommodateArray.length != 0) {
            for (const i of accommodateArray) {
                if (Number(i.stay) >= Number(date.since) && Number(date.until) <= Number(i.stay)) {
                    const room = await this._room.queryRoom(i.number_room);
                    const client = await this._client.queryClientById(i.id_client);
                    reports.push({
                        room: i.number_room,
                        day: i.number_day,
                        price: room != null ? room.price : 0,
                        client: client != null ? client.name : null,
                        telephone: client != null ? client.telephone : null
                    });
                }
            }
        }
        return reports;
    }
};
__decorate([
    common_1.Post('create-room'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rooom_1.Room]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "createRoom", null);
__decorate([
    common_1.Get('getListRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getListRoom", null);
__decorate([
    common_1.Get('state-rooms/:state'),
    __param(0, common_1.Param('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "listStateRooms", null);
__decorate([
    common_1.Get('accommodate-room/:room/:state'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getAccommodateRoom", null);
__decorate([
    common_1.Get('update-room/:id/:state'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoom", null);
__decorate([
    common_1.Post('report-room'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "report", null);
RoomController = __decorate([
    common_1.Controller('room'),
    __metadata("design:paramtypes", [room_service_1.RoomService, client_service_1.ClientService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map