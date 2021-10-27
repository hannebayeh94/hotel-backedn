import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm/index";
import {Room} from "./rooom";

@Entity()
export class Accommodate{
    @PrimaryGeneratedColumn() id: number;
    @Column() public origin: string;
    @Column() public number_room: string;
    @Column() public number_day: number;
    @Column() public number_persons: number;
    @Column() public stay: string;
    @Column() public state: boolean;
    @Column() public id_client: number;

}