import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Client{
    @PrimaryGeneratedColumn() id: number;
    @Column() public name: string;
    @Column() public telephone: string;
    @Column() public type_document: string;
    @Column() public identificationcard: number;
    @Column() public date_of_expedition: string;
    @Column() public registration_date: string;
}