import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Client} from "../entity/client";
import {Repository} from "typeorm/index";
import {Departamentos} from "../entity/departamentos";
import {Municipios} from "../entity/municipios";
import {Accommodate} from "../entity/accommodate";

@Injectable()
export class ClientService {

    constructor(
        @InjectRepository(Departamentos) private readonly departmentRepository: Repository<Departamentos>,
        @InjectRepository(Municipios) private readonly cityOrMunicipalityRepository: Repository<Municipios>,
        @InjectRepository(Accommodate) private readonly accommodateRepository: Repository<Accommodate>,
        @InjectRepository(Client)private readonly clientRepository: Repository<Client>) {
    }

    saveClient(client: Client){
       return this.clientRepository.createQueryBuilder().insert().into(Client).values(client).execute();
    }

    saveAccommodate(accommodate: Accommodate){
        return this.accommodateRepository.createQueryBuilder().insert().into(Accommodate).values(accommodate).execute();
    }

    queryListDeparment(){
        return this.departmentRepository.find();
    }

    queryListCityOrMunicipalityById(id: number){
      return this.cityOrMunicipalityRepository.createQueryBuilder('municipios').where('municipios.departamento_id=:departamento_id', {departamento_id: id}).getMany();
    }

    queryClient(identificationcard: number){
        return this.clientRepository.createQueryBuilder('client').where('client.identificationcard=:identificationcard', {identificationcard}).getOne();
    }

    queryClientById(id: number){
        return this.clientRepository.createQueryBuilder('client').where('client.id=:id', {id}).getOne();
    }

    updateClietAccommodateById(id_client: number, state: boolean){
        return this.clientRepository.createQueryBuilder().update(Accommodate).set({state}).where('id_client=:id_client', {id_client}).execute();
    }

}
