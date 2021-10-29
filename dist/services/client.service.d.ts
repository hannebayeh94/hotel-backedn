import { Client } from "../entity/client";
import { Repository } from "typeorm/index";
import { Departamentos } from "../entity/departamentos";
import { Municipios } from "../entity/municipios";
import { Accommodate } from "../entity/accommodate";
export declare class ClientService {
    private readonly departmentRepository;
    private readonly cityOrMunicipalityRepository;
    private readonly accommodateRepository;
    private readonly clientRepository;
    constructor(departmentRepository: Repository<Departamentos>, cityOrMunicipalityRepository: Repository<Municipios>, accommodateRepository: Repository<Accommodate>, clientRepository: Repository<Client>);
    saveClient(client: Client): Promise<import("typeorm").InsertResult>;
    saveAccommodate(accommodate: Accommodate): Promise<import("typeorm").InsertResult>;
    queryListDeparment(): Promise<Departamentos[]>;
    queryListCityOrMunicipalityById(id: number): Promise<Municipios[]>;
    queryClient(identificationcard: number): Promise<Client>;
    queryClientById(id: number): Promise<Client>;
    updateClietAccommodateById(id_client: number, state: boolean): Promise<import("typeorm").UpdateResult>;
}
