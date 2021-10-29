import { Repository } from "typeorm";
import { Product } from "../../entity/product";
import { Category } from "../../entity/category";
export declare class ProductService {
    private readonly productRepository;
    private readonly categoryRepository;
    constructor(productRepository: Repository<Product>, categoryRepository: Repository<Category>);
    saveCategory(category: Category): Promise<import("typeorm").InsertResult>;
    queryCategory(category: string): Promise<Category>;
    queryListCategory(): Promise<Category[]>;
    saveProduct(product: Product): Promise<import("typeorm").InsertResult>;
    queryProduct(title: string): Promise<Product>;
    queryListProduct(): Promise<Product[]>;
    queryLikeProduct(search: string): Promise<Product[]>;
}
