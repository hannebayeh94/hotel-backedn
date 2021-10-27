import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Departamentos{
    @PrimaryGeneratedColumn() public id_departamento: any;
    @Column() public departamento: string;
}