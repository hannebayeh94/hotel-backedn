import { RoomService } from "../../services/room.service";
import { Room } from "../../entity/rooom";
import { ClientService } from "../../services/client.service";
export declare class RoomController {
    private readonly _room;
    private readonly _client;
    constructor(_room: RoomService, _client: ClientService);
    createRoom(roomDto: Room): Promise<{
        state: boolean;
        room?: undefined;
    } | {
        state: boolean;
        room: Room;
    }>;
    getListRoom(): Promise<Room[]>;
    listStateRooms(state: number): Promise<Room[]>;
    getAccommodateRoom(param: any): Promise<{
        room: import("../../entity/accommodate").Accommodate;
    }>;
    updateRoom(param: any): Promise<import("typeorm").UpdateResult>;
    report(date: any): Promise<any[]>;
}
