import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export  class Room{

    @PrimaryGeneratedColumn()
    public id: number;
    @Column() public number_room: string;
    @Column() public number_persons: number;
    @Column() public price: number;
    @Column() public state: boolean;
    @Column() public registration_date: string;

}