import { TypeUser } from "../../entity/typeUser";
import { Connection, Repository } from "typeorm";
export declare class TypeUserService {
    private connection;
    private typeUserRepository;
    constructor(connection: Connection, typeUserRepository: Repository<TypeUser>);
    saveTypeUser(user: TypeUser): Promise<import("typeorm").InsertResult>;
    getLogin(username: string): Promise<TypeUser>;
}
