import { Repository } from "typeorm";
import { User } from "../../entity/user";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    saveUser(user: User): Promise<import("typeorm").InsertResult>;
    queryIdentificationcard(identificationcard: number): Promise<User>;
    queryEmail(email: string): Promise<User>;
}
