"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const product_1 = require("../../entity/product");
const category_1 = require("../../entity/category");
let ProductService = class ProductService {
    constructor(productRepository, categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }
    saveCategory(category) {
        return this.categoryRepository.createQueryBuilder().insert().into(category_1.Category).values(category).execute();
    }
    queryCategory(category) {
        return this.categoryRepository.createQueryBuilder('category').where('category.category = :category', { category }).getOne();
    }
    queryListCategory() {
        return this.categoryRepository.find();
    }
    saveProduct(product) {
        return this.productRepository.createQueryBuilder().insert().into(product_1.Product).values(product).execute();
    }
    queryProduct(title) {
        return this.productRepository.createQueryBuilder('product').where('product.title=:title', { title }).getOne();
    }
    queryListProduct() {
        return this.productRepository.find();
    }
    queryLikeProduct(search) {
        return this.productRepository.find({ title: typeorm_1.Like(`%${search}%`) });
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(product_1.Product)),
    __param(1, typeorm_2.InjectRepository(category_1.Category)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map