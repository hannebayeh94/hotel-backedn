import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn() public id: number;

    @Column() public nombre:string;

    @Column() public apellidos:string;

    @Column() public cedula: number;

    @Column() public correo: string;

    @Column() public telefono: string;

    @Column() public id_type_user: number;

}
