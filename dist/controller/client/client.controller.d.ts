import { ClientService } from "../../services/client.service";
import { RoomService } from "../../services/room.service";
export declare class ClientController {
    private readonly _client;
    private readonly _room;
    constructor(_client: ClientService, _room: RoomService);
    createClient(client: any): Promise<{
        state: boolean;
        error: string;
        client?: undefined;
    } | {
        state: boolean;
        client: any;
        error?: undefined;
    }>;
    listDeparment(): Promise<import("../../entity/departamentos").Departamentos[]>;
    getListCityOrMunicipality(id: number): Promise<import("../../entity/municipios").Municipios[]>;
    getClient(identificationcard: any): Promise<{
        client: import("../../entity/client").Client;
    }>;
    getClientById(id: any): Promise<import("../../entity/client").Client>;
    updateClientAccommodateById(param: any): Promise<import("typeorm").UpdateResult>;
}
