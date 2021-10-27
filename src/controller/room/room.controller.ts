import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {RoomIn} from "../../interface/room.interface";
import {RoomService} from "../../services/room.service";
import {Room} from "../../entity/rooom";
import {ClientService} from "../../services/client.service";

@Controller('room')
export class RoomController {

    constructor(private readonly _room: RoomService, private readonly _client: ClientService) {
    }

    @Post('create-room')
    async createRoom(@Body() roomDto: Room) {

        if (await this._room.queryRoom(roomDto.number_room) != null) {
            return {state: false};
        }

        await this._room.saveRoom(roomDto);
        return {state: true, room: roomDto}
    }

    @Get('getListRoom')
    async getListRoom() {
        return this._room.queryListRoom();
    }

    @Get('state-rooms/:state')
    async listStateRooms(@Param('state') state: number) {
        return await this._room.queryStateRooms(state);
    }

    @Get('accommodate-room/:room/:state')
    async getAccommodateRoom(@Param() param) {
      const room = await this._room.queryRoomAccommodate(param.room, param.state);
      if(room != null){
          return {room};
      }else{
          return {room: null};
      }
    }

    @Get('update-room/:id/:state')
    async updateRoom(@Param() param){
        return await this._room.updateStateRoomById(param.id, param.state);
    }

    @Post('report-room')
    async report(@Body() date){
       const accommodateArray = await this._room.queryAllAccommodateRoom(date.state);
       let reports: any[] = [];
       if(accommodateArray.length != 0){
           for (const i of accommodateArray){
               if(Number(i.stay) >= Number(date.since) && Number(date.until) <= Number(i.stay)){
                   const room = await this._room.queryRoom(i.number_room);
                   const client= await this._client.queryClientById(i.id_client);
                   reports.push({
                       room: i.number_room,
                       day: i.number_day,
                       price: room != null?room.price:0,
                       client: client != null?client.name:null,
                       telephone: client != null?client.telephone:null
                   })
               }
           }
       }
       return reports;
    }


}
