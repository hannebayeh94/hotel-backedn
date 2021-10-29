import { Room } from "../entity/rooom";
import { Repository } from "typeorm";
import { Accommodate } from "../entity/accommodate";
export declare class RoomService {
    private readonly accommodateRepository;
    private readonly roomRepository;
    constructor(accommodateRepository: Repository<Accommodate>, roomRepository: Repository<Room>);
    saveRoom(room: Room): Promise<import("typeorm").InsertResult>;
    queryRoom(room: string): Promise<Room>;
    queryListRoom(): Promise<Room[]>;
    queryStateRooms(state: number): Promise<Room[]>;
    queryRoomCient(id_client: number): Promise<Room>;
    queryRoomAccommodate(room: Accommodate, state: number): Promise<Accommodate>;
    queryAllAccommodateRoom(state: boolean): Promise<Accommodate[]>;
    updateStateRoom(state: boolean, number_room: string): Promise<import("typeorm").UpdateResult>;
    updateStateRoomById(id: number, state: boolean): Promise<import("typeorm").UpdateResult>;
}
