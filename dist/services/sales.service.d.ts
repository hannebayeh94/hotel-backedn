import { Sales } from "../entity/sales";
import { Repository } from "typeorm/index";
export declare class SalesService {
    private readonly salesRepository;
    constructor(salesRepository: Repository<Sales>);
    save(sales: Sales): Promise<import("typeorm").InsertResult>;
}
