import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product{
    @PrimaryGeneratedColumn() public id: number;
    @Column() public title: string;
    @Column() public description: string;
    @Column() public date_expire: string;
    @Column() public price: number;
    @Column() public id_category: number;
    @Column() public registration_date: string;
}