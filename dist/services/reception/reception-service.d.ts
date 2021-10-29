import { Repository } from "typeorm";
import { Reception } from "../../entity/reception";
export declare class ReceptionService {
    private receptionRepository;
    constructor(receptionRepository: Repository<Reception>);
    saveReception(reception: Reception): Promise<import("typeorm").InsertResult>;
    queryIdentificationcardByReception(identificationcard: number): Promise<Reception>;
}
