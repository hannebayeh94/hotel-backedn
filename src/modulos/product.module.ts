import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Product} from "../entity/product";
import {Category} from "../entity/category";
import {ProductController} from "../controller/product/product.controller";
import {ProductService} from "../services/product/product.service";
import {Accommodate} from "../entity/accommodate";
import {RoomService} from "../services/room.service";
import {Room} from "../entity/rooom";
import {Sales} from "../entity/sales";
import {SalesService} from "../services/sales.service";

@Module({
    imports: [TypeOrmModule.forFeature([Product, Category, Accommodate, Room, Sales])],
    controllers: [ProductController],
    providers: [ProductService, RoomService, SalesService]
})
export class ProductModule {



}
