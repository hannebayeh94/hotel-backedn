import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Client} from "../entity/client";
import {ClientController} from "../controller/client/client.controller";
import {ClientService} from "../services/client.service";
import {Departamentos} from "../entity/departamentos";
import {Municipios} from "../entity/municipios";
import {Accommodate} from "../entity/accommodate";
import {RoomService} from "../services/room.service";
import {Room} from "../entity/rooom";

@Module({
    imports: [TypeOrmModule.forFeature([Client, Departamentos, Municipios, Accommodate, Room])],
    controllers: [ClientController],
    providers: [ClientService, RoomService]
})
export class ClientModule {}
