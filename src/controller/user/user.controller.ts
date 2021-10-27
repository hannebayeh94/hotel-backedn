import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { TypeUser } from "../../entity/typeUser";
import { TypeUserService } from "../../services/user-service/type-user.service";
import { User } from "../../entity/user";
import { UserService } from "../../services/user/user-service";
import { UserTypeUser } from "../../interface/user-type-user";
import { ReceptionUser } from "../../interface/reception-user";
import { ReceptionService } from "../../services/reception/reception-service";

@Controller('type-user')
export class UserController {

  constructor(
    private readonly _typeUser: TypeUserService,
    private readonly _user: UserService,
    private readonly _reception: ReceptionService
  ) {
  }

  @Post('create-type-user')
  async createTypeUser(@Body() user: UserTypeUser, @Res() res) {

    let id = null;
    let response = null;

    if (await this.getUser(user) != null) {
      res.status(301).send({
        message: await this.getUser(user)
      });
      return;
    }

    let hash = bcrypt.hashSync(user.password, 10);

    try {
      const save = await this._typeUser.saveTypeUser({
        id: null,
        type: user.type,
        username: user.username,
        password: hash
      });
      id = save.generatedMaps[0].id;
    } catch (e) {
      throw "Error al guardar el tipo de usuario en la base de datos";
    }

    if (id != null) {

      try {
        await this.createUser({
          id: null,
          nombre: user.nombre,
          apellidos: user.apellidos,
          cedula: user.cedula,
          correo: user.correo,
          telefono: user.telefono,
          id_type_user: id
        });
        user.password = null;
        response = user;
      } catch (e) {
        throw "Error al guardar el usuario en la base de datos";
      }

    }
    return res.status(200).send(response);
  }

  createUser(user: User) {
    return this._user.saveUser(user)
  }

  @Get('login/:username/:password')
  async login(@Param() param: TypeUser) {
    let data: TypeUser = null;
    let responseLogin: boolean = false;

    try {
      data = await this._typeUser.getLogin(param.username);
    } catch (e) {
      console.log('Error al consultar las credenciales del usuario');
    }

    if (typeof data !== 'undefined') {
      try {
        responseLogin = await bcrypt.compare(param.password, data.password);
        data.password = null;
      } catch (e) {
        console.log('Error al comparar la contraseña con el bcrypt');
      }
    }
    return {data: responseLogin, user: data};
  }

  async getUser(user: UserTypeUser) {
    let userdb: TypeUser = null;
    let identificationcarddb: User = null;
    let emaildb: User = null;

    try {
      userdb = await this._typeUser.getLogin(user.username);
    } catch (e) {
      throw 'Error al consultar las credenciales del usuario';
    }

    if (userdb != null) {
      if (userdb.username == user.username) {
        return 'El usuario ya existe en el sistema';
      }
    }

    try {
      identificationcarddb = await this._user.queryIdentificationcard(user.cedula)
    } catch (e) {
      throw 'Error al consultar la cedula del usuario';
    }

    if (identificationcarddb != null) {
      if (identificationcarddb.cedula == user.cedula) {
        return 'La cedula que estas ingresando ya existe en el sistema';
      }
    }

    try {
      emaildb = await this._user.queryEmail(user.correo);
    } catch (e) {
      throw 'Error al consultar el correo'
    }

    if (emaildb != null) {
      if (emaildb.correo == user.correo) {
        return 'El correo que estas ingresando ya existe en el sistema';
      }
    }
    return null;
  }

  @Post('create-reception')
  async createReception(@Body() receptionDto: ReceptionUser, @Res() res) {

    let id = null;
    let response = null;

    try {
      let identificationcard = await this._reception.queryIdentificationcardByReception(receptionDto.cedula);
      if (identificationcard != null) {
        if (identificationcard.cedula == receptionDto.cedula) {
          res.status(301).send({
            message: 'La cedula que estas ingresando ya existe en el sistema'
          });
        }
        return;
      }
    } catch (e) {
      throw 'Error al consultar el cedula'
    }

    try {
      let user = await this._typeUser.getLogin(receptionDto.username);
      if (user != null) {
        if (user.username == receptionDto.username) {
          res.status(301).send({
            message: 'El usuario que estas ingresando ya existe en el sistema'
          });
        }
        return;
      }
    } catch (e) {
      throw 'Error al consultar el usuario'
    }

    const hash = bcrypt.hashSync(receptionDto.password, 10);

    try {
      const saveType = await this._typeUser.saveTypeUser({
        id: null,
        type: 'reception',
        username: receptionDto.username,
        password: hash
      });
      id = saveType.generatedMaps[0].id;
    } catch (e) {
      throw "Error al guardar el tipo de usuario en la base de datos";
    }

    if (id != null) {
      try {
        await this._reception.saveReception({
          id: null,
          nombre: receptionDto.nombre,
          apellidos: receptionDto.apellidos,
          telefono: receptionDto.telefono,
          cedula: receptionDto.cedula,
          fecha_nacimiento: receptionDto.fecha_nacimiento,
          correo: receptionDto.correo,
          fecha_contrato: receptionDto.fecha_contrato,
          salario: receptionDto.salario,
          username: receptionDto.username,
          password: receptionDto.password,
          id_type_user: id
        });
        receptionDto.password = null;
        response = receptionDto;
      } catch (e) {
        throw "Error al guardar el usuario en la base de datos";
      }
    }

    return res.status(200).send(response);
  }

}



