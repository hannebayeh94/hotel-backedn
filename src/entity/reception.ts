import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Reception {

    @PrimaryGeneratedColumn() public id: number;

    @Column() public nombre:string;
    @Column() public apellidos:string;
    @Column() public telefono: string;
    @Column() public cedula: number;
    @Column() public fecha_nacimiento: string;
    @Column() public correo: string;
    @Column() public fecha_contrato: string;
    @Column() public salario: number;
    @Column() public username: string;
    @Column() public password: string;
    @Column() public id_type_user: number;

}