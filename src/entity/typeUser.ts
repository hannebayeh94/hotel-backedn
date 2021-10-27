import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('type_user')
export class TypeUser {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    username: string;

    @Column()
    password: string;

}
