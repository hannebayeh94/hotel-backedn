"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_1 = require("../entity/product");
const category_1 = require("../entity/category");
const product_controller_1 = require("../controller/product/product.controller");
const product_service_1 = require("../services/product/product.service");
const accommodate_1 = require("../entity/accommodate");
const room_service_1 = require("../services/room.service");
const rooom_1 = require("../entity/rooom");
const sales_1 = require("../entity/sales");
const sales_service_1 = require("../services/sales.service");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_1.Product, category_1.Category, accommodate_1.Accommodate, rooom_1.Room, sales_1.Sales])],
        controllers: [product_controller_1.ProductController],
        providers: [product_service_1.ProductService, room_service_1.RoomService, sales_service_1.SalesService]
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map