import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Connection, Repository, getConnection} from "typeorm";
import {Reception} from "../../entity/reception";

@Injectable()
export class ReceptionService {

    constructor(@InjectRepository(Reception) private receptionRepository: Repository<Reception>) {
    }

    saveReception(reception: Reception){
        return this.receptionRepository.createQueryBuilder().insert().into(Reception).values({
            nombre: reception.nombre,
            apellidos: reception.apellidos,
            telefono: reception.telefono,
            cedula: reception.cedula,
            fecha_nacimiento: reception.fecha_nacimiento,
            correo: reception.correo,
            fecha_contrato: reception.fecha_contrato,
            salario: reception.salario,
            username: reception.username,
            password: reception.password,
            id_type_user: reception.id_type_user
        }).execute();
    }

    queryIdentificationcardByReception(identificationcard: number){
        return this.receptionRepository.createQueryBuilder('reception').where("reception.cedula = :cedula", {cedula: identificationcard}).getOne();
    }

}