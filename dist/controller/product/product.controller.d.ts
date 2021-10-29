import { ProductService } from "../../services/product/product.service";
import { RoomService } from "../../services/room.service";
import { SalesService } from "../../services/sales.service";
export declare class ProductController {
    private readonly _product;
    private readonly _sales;
    private readonly _room;
    constructor(_product: ProductService, _sales: SalesService, _room: RoomService);
    createCategory(category: string, res: any): Promise<void>;
    getCategory(): Promise<{
        list: import("../../entity/category").Category[];
    }>;
    createProduct(product: any): Promise<{
        state: boolean;
        product?: undefined;
    } | {
        state: boolean;
        product: any;
    }>;
    listProduct(): Promise<import("../../entity/product").Product[]>;
    likeProduct(param: any): Promise<import("../../entity/product").Product[]>;
    onSales(sales: any): Promise<{
        state: boolean;
        sales: any;
    } | {
        state: boolean;
        sales?: undefined;
    }>;
}
