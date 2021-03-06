import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmCoreModule} from "@nestjs/typeorm/dist/typeorm-core.module";
import {TypeUSerModule} from "./modulos/typeUSerModule";
import {TypeUser} from "./entity/typeUser";
import {User} from "./entity/user";
import {Reception} from "./entity/reception";
import {Category} from "./entity/category";
import {Product} from "./entity/product";
import { ProductModule } from './modulos/product.module';
import { RoomModule } from './modulos/room.module';
import {Room} from "./entity/rooom";
import { ClientModule } from './modulos/client.module';
import {Client} from "./entity/client";
import {Departamentos} from "./entity/departamentos";
import {Municipios} from "./entity/municipios";
import {Accommodate} from "./entity/accommodate";
import {Sales} from "./entity/sales";

@Module({
  imports: [
      TypeOrmCoreModule.forRoot({
          "type": "mysql",
          "host": "hwr4wkxs079mtb19.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
          "port": 3306,
          "username": "nb5crkn87it5v9jv",
          "password": "vsqdge05rnz6ctof",
          "database": "s362y9k12dz0k8pt",
          "entities": [
            TypeUser,
            User,
            Reception,
            Category,
            Product,
            Room,
            Client,
            Departamentos,
            Municipios,
            Accommodate,
            Sales],
          "synchronize": true
      }),
      TypeUSerModule,
      ProductModule,
      RoomModule,
      ClientModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
// @ts-ignore
export class AppModule {}