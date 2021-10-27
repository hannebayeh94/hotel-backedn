import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Room} from "../entity/rooom";
import {Repository} from "typeorm";
import {Accommodate} from "../entity/accommodate";

@Injectable()
export class RoomService {

    constructor(
        @InjectRepository(Accommodate) private readonly accommodateRepository: Repository<Accommodate>,
        @InjectRepository(Room) private readonly roomRepository: Repository<Room>) {
    }

    saveRoom(room: Room){
        return this.roomRepository.createQueryBuilder().insert().into(Room).values(room).execute();
    }

    queryRoom(room: string){
       return this.roomRepository.createQueryBuilder('room').where('room.number_room=:number_room', {number_room:room}).getOne();
    }

    queryListRoom(){
        return this.roomRepository.find();
    }

    queryStateRooms(state: number){
        return this.roomRepository.createQueryBuilder('room').where('room.state=:state', {state}).getMany();
    }

    queryRoomCient(id_client: number){
        return this.roomRepository.createQueryBuilder('room').where('room.id_client=:id_client').getOne();
    }

    queryRoomAccommodate(room: Accommodate, state: number){
        return this.accommodateRepository.createQueryBuilder('accommodate').where('accommodate.number_room=:number_room and accommodate.state=:state', {number_room: room, state}).getOne();
    }

    queryAllAccommodateRoom(state: boolean){
        return this.accommodateRepository.find({state});
    }

    updateStateRoom(state: boolean, number_room: string){
        return this.roomRepository.createQueryBuilder().update(Room).set({state}).where('number_room=:number_room', {number_room}).execute();
    }

    updateStateRoomById(id: number, state: boolean){
        return this.roomRepository.createQueryBuilder().update(Room).set({state}).where('id=:id', {id}).execute();
    }

}
