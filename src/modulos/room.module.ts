import { Module } from '@nestjs/common';
import { RoomService } from '../services/room.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Room} from "../entity/rooom";
import {RoomController} from "../controller/room/room.controller";
import {Accommodate} from "../entity/accommodate";
import {Client} from "../entity/client";
import {ClientService} from "../services/client.service";
import {Departamentos} from "../entity/departamentos";
import {Municipios} from "../entity/municipios";

@Module({
  imports:[TypeOrmModule.forFeature([Room, Accommodate, Departamentos, Municipios, Client])],
  controllers:[RoomController],
  providers: [RoomService, ClientService]
})
export class RoomModule {}
