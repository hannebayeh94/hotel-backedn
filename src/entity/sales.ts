import {Column, Entity, PrimaryGeneratedColumn} from "typeorm/index";


@Entity()
export class Sales{
    @PrimaryGeneratedColumn() id: number;
    @Column() id_product: number;
    @Column() quantity: number;
    @Column() id_client: number;
    @Column() type: number;
}