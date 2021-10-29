"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_core_module_1 = require("@nestjs/typeorm/dist/typeorm-core.module");
const typeUSerModule_1 = require("./modulos/typeUSerModule");
const typeUser_1 = require("./entity/typeUser");
const user_1 = require("./entity/user");
const reception_1 = require("./entity/reception");
const category_1 = require("./entity/category");
const product_1 = require("./entity/product");
const product_module_1 = require("./modulos/product.module");
const room_module_1 = require("./modulos/room.module");
const rooom_1 = require("./entity/rooom");
const client_module_1 = require("./modulos/client.module");
const client_1 = require("./entity/client");
const departamentos_1 = require("./entity/departamentos");
const municipios_1 = require("./entity/municipios");
const accommodate_1 = require("./entity/accommodate");
const sales_1 = require("./entity/sales");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_core_module_1.TypeOrmCoreModule.forRoot({
                "type": "mysql",
                "host": "ckshdphy86qnz0bj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
                "port": 3306,
                "username": "yglfzta4vj1qoem7",
                "password": "z6tsurtq975d46ck",
                "database": "sbv6cbg6tq4akv60",
                "entities": [
                    typeUser_1.TypeUser,
                    user_1.User,
                    reception_1.Reception,
                    category_1.Category,
                    product_1.Product,
                    rooom_1.Room,
                    client_1.Client,
                    departamentos_1.Departamentos,
                    municipios_1.Municipios,
                    accommodate_1.Accommodate,
                    sales_1.Sales
                ],
                "synchronize": true
            }),
            typeUSerModule_1.TypeUSerModule,
            product_module_1.ProductModule,
            room_module_1.RoomModule,
            client_module_1.ClientModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map