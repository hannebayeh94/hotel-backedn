import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { TypeUser } from "../../entity/typeUser";
import { Connection, Repository, getConnection } from "typeorm";

@Injectable()
export class TypeUserService {
  constructor(
    private connection: Connection,
    @InjectRepository(TypeUser) private typeUserRepository: Repository<TypeUser>) {
  }

  saveTypeUser(user: TypeUser) {
    return this.typeUserRepository.createQueryBuilder().insert().into(TypeUser).values({
      type: user.type, username: user.username, password: user.password
    }).execute();
  }

  getLogin(username: string): Promise<TypeUser> {
    return this.typeUserRepository.createQueryBuilder('type_user')
      .where("type_user.username = :username", {username}).getOne();
  }


}
