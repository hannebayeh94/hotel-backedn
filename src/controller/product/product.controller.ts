import {Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
import {ProductService} from "../../services/product/product.service";
import {RoomService} from "../../services/room.service";
import {SalesService} from "../../services/sales.service";

@Controller('product')
export class ProductController {

    constructor(
        private readonly _product: ProductService,
        private readonly _sales: SalesService,
        private readonly _room: RoomService) {
    }

    @Get('create-category/:category')
    async createCategory(@Param('category') category: string, @Res() res) {

        if (await this._product.queryCategory(category.toLowerCase()) != null) {
            res.status(200).send({err: 'Esta categoria ya existe'});
            return;
        }

        const save = await this._product.saveCategory({
            id: null,
            category: category.toLowerCase()
        });

        if (save != null) {
            res.status(200).send({id: save.generatedMaps[0].id, category, state: true})
        } else {
            res.status(200).send({state: false})
        }
    }

    @Get('getCategory')
    async getCategory() {
        return {list: await this._product.queryListCategory()};
    }

    @Post()
    async createProduct(@Body() product: any) {

        if (await this._product.queryProduct(product.title) != null) {
            return {state: false}
        }

        await this._product.saveProduct(product);
        return {state: true, product};
    }

    @Get('list-product')
    async listProduct() {
        return await this._product.queryListProduct();
    }

    @Get('like-product/:search')
    async likeProduct(@Param() param) {
        return await this._product.queryLikeProduct(param.search);
    }

    @Post('onSalesProduct')
    async onSales(@Body() sales) {

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
            return {state: true, sales};
        } catch (e) {
            throw 'Error al guardar los datos, por favor revisa tu conexión.'
        }

        return {state: false};
    }


}
