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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rooom_1 = require("../entity/rooom");
const typeorm_2 = require("typeorm");
const accommodate_1 = require("../entity/accommodate");
let RoomService = class RoomService {
    constructor(accommodateRepository, roomRepository) {
        this.accommodateRepository = accommodateRepository;
        this.roomRepository = roomRepository;
    }
    saveRoom(room) {
        return this.roomRepository.createQueryBuilder().insert().into(rooom_1.Room).values(room).execute();
    }
    queryRoom(room) {
        return this.roomRepository.createQueryBuilder('room').where('room.number_room=:number_room', { number_room: room }).getOne();
    }
    queryListRoom() {
        return this.roomRepository.find();
    }
    queryStateRooms(state) {
        return this.roomRepository.createQueryBuilder('room').where('room.state=:state', { state }).getMany();
    }
    queryRoomCient(id_client) {
        return this.roomRepository.createQueryBuilder('room').where('room.id_client=:id_client').getOne();
    }
    queryRoomAccommodate(room, state) {
        return this.accommodateRepository.createQueryBuilder('accommodate').where('accommodate.number_room=:number_room and accommodate.state=:state', { number_room: room, state }).getOne();
    }
    queryAllAccommodateRoom(state) {
        return this.accommodateRepository.find({ state });
    }
    updateStateRoom(state, number_room) {
        return this.roomRepository.createQueryBuilder().update(rooom_1.Room).set({ state }).where('number_room=:number_room', { number_room }).execute();
    }
    updateStateRoomById(id, state) {
        return this.roomRepository.createQueryBuilder().update(rooom_1.Room).set({ state }).where('id=:id', { id }).execute();
    }
};
RoomService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(accommodate_1.Accommodate)),
    __param(1, typeorm_1.InjectRepository(rooom_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map