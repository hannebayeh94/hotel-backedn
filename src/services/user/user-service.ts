import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../../entity/user";
import {Reception} from "../../entity/reception";

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }

    saveUser(user: User){
       return this.userRepository.createQueryBuilder().insert().into(User).values(user).execute();
    }

    // query identificationcard for user admin.
    queryIdentificationcard(identificationcard: number){
       return this.userRepository.createQueryBuilder('user').where("user.cedula = :cedula", {cedula: identificationcard}).getOne();
    }


    // query email for user admin.
    queryEmail(email: string){
        return this.userRepository.createQueryBuilder('user').where("user.correo = :correo", {correo: email}).getOne();
    }


}
