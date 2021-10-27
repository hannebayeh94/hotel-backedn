import { IsNumber, IsString } from "class-validator";

export class UserTypeUser {
    @IsString() type: string;
    @IsString() username: string;
    @IsString() password: string;
    @IsString() nombre: string;
    @IsString() apellidos: string;
    @IsNumber() cedula: number;
    @IsString() correo: string;
    @IsString() telefono: string;
}
