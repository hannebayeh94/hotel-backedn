import { TypeUser } from "../../entity/typeUser";
import { TypeUserService } from "../../services/user-service/type-user.service";
import { User } from "../../entity/user";
import { UserService } from "../../services/user/user-service";
import { UserTypeUser } from "../../interface/user-type-user";
import { ReceptionUser } from "../../interface/reception-user";
import { ReceptionService } from "../../services/reception/reception-service";
export declare class UserController {
    private readonly _typeUser;
    private readonly _user;
    private readonly _reception;
    constructor(_typeUser: TypeUserService, _user: UserService, _reception: ReceptionService);
    createTypeUser(user: UserTypeUser, res: any): Promise<any>;
    createUser(user: User): Promise<import("typeorm").InsertResult>;
    login(param: TypeUser): Promise<{
        data: boolean;
        user: TypeUser;
    }>;
    getUser(user: UserTypeUser): Promise<"El usuario ya existe en el sistema" | "La cedula que estas ingresando ya existe en el sistema" | "El correo que estas ingresando ya existe en el sistema">;
    createReception(receptionDto: ReceptionUser, res: any): Promise<any>;
}
