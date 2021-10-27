import {Injectable} from '@nestjs/common';
import {Like, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "../../entity/product";
import {Category} from "../../entity/category";

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>,
        @InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {
    }

    saveCategory(category: Category){
       return this.categoryRepository.createQueryBuilder().insert().into(Category).values(category).execute();
    }

    queryCategory(category: string){
       return this.categoryRepository.createQueryBuilder('category').where('category.category = :category', {category}).getOne();
    }

    queryListCategory(){
       return this.categoryRepository.find();
    }

    saveProduct(product: Product){
        return this.productRepository.createQueryBuilder().insert().into(Product).values(product).execute();
    }

    queryProduct(title: string){
        return this.productRepository.createQueryBuilder('product').where('product.title=:title', {title}).getOne();
    }

    queryListProduct(){
        return this.productRepository.find();
    }

    queryLikeProduct(search: string){
        return this.productRepository.find({title: Like(`%${search}%`)});
    }




}
