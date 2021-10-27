import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Sales} from "../entity/sales";
import {Repository} from "typeorm/index";

@Injectable()
export class SalesService{

    constructor(@InjectRepository(Sales) private readonly salesRepository: Repository<Sales>) {
    }

    save(sales: Sales){
       return this.salesRepository.createQueryBuilder().insert().into(Sales).values(sales).execute();
    }

}