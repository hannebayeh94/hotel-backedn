import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";

@Entity()
export class Municipios{
    @PrimaryGeneratedColumn() id_municipio: number;
    @Column() public municipio: string;
    @Column() public state: number;
    @Column() public departamento_id: number;
}