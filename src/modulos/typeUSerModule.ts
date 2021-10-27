import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypeUser} from "../entity/typeUser";
import {UserController} from "../controller/user/user.controller";
import {TypeUserService} from "../services/user-service/type-user.service";
import {User} from "../entity/user";
import {UserService} from "../services/user/user-service";
import {Reception} from "../entity/reception";
import {ReceptionService} from "../services/reception/reception-service";

@Module({
    imports: [TypeOrmModule.forFeature([TypeUser, User, Reception])],
    controllers: [UserController],
    providers:[TypeUserService, UserService, ReceptionService]
})
export class TypeUSerModule {}
