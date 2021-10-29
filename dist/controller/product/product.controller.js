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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("../../services/product/product.service");
const room_service_1 = require("../../services/room.service");
const sales_service_1 = require("../../services/sales.service");
let ProductController = class ProductController {
    constructor(_product, _sales, _room) {
        this._product = _product;
        this._sales = _sales;
        this._room = _room;
    }
    async createCategory(category, res) {
        if (await this._product.queryCategory(category.toLowerCase()) != null) {
            res.status(200).send({ err: 'Esta categoria ya existe' });
            return;
        }
        const save = await this._product.saveCategory({
            id: null,
            category: category.toLowerCase()
        });
        if (save != null) {
            res.status(200).send({ id: save.generatedMaps[0].id, category, state: true });
        }
        else {
            res.status(200).send({ state: false });
        }
    }
    async getCategory() {
        return { list: await this._product.queryListCategory() };
    }
    async createProduct(product) {
        if (await this._product.queryProduct(product.title) != null) {
            return { state: false };
        }
        await this._product.saveProduct(product);
        return { state: true, product };
    }
    async listProduct() {
        return await this._product.queryListProduct();
    }
    async likeProduct(param) {
        return await this._product.queryLikeProduct(param.search);
    }
    async onSales(sales) {
        let idClient = 0;
        if (sales.room) {
            const room = await this._room.queryRoomAccommodate(sales.room, 1);
            idClient = room.id_client;
        }
        try {
            await this._sales.save({
                id: null,
                id_product: sales.id_product,
                quantity: sales.quantity,
                id_client: idClient,
                type: sales.type
            });
            return { state: true, sales };
        }
        catch (e) {
            throw 'Error al guardar los datos, por favor revisa tu conexión.';
        }
        return { state: false };
    }
};
__decorate([
    common_1.Get('create-category/:category'),
    __param(0, common_1.Param('category')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createCategory", null);
__decorate([
    common_1.Get('getCategory'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getCategory", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Get('list-product'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "listProduct", null);
__decorate([
    common_1.Get('like-product/:search'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "likeProduct", null);
__decorate([
    common_1.Post('onSalesProduct'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "onSales", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        sales_service_1.SalesService,
        room_service_1.RoomService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map