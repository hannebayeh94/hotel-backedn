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
exports.ClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const client_1 = require("../entity/client");
const index_1 = require("typeorm/index");
const departamentos_1 = require("../entity/departamentos");
const municipios_1 = require("../entity/municipios");
const accommodate_1 = require("../entity/accommodate");
let ClientService = class ClientService {
    constructor(departmentRepository, cityOrMunicipalityRepository, accommodateRepository, clientRepository) {
        this.departmentRepository = departmentRepository;
        this.cityOrMunicipalityRepository = cityOrMunicipalityRepository;
        this.accommodateRepository = accommodateRepository;
        this.clientRepository = clientRepository;
    }
    saveClient(client) {
        return this.clientRepository.createQueryBuilder().insert().into(client_1.Client).values(client).execute();
    }
    saveAccommodate(accommodate) {
        return this.accommodateRepository.createQueryBuilder().insert().into(accommodate_1.Accommodate).values(accommodate).execute();
    }
    queryListDeparment() {
        return this.departmentRepository.find();
    }
    queryListCityOrMunicipalityById(id) {
        return this.cityOrMunicipalityRepository.createQueryBuilder('municipios').where('municipios.departamento_id=:departamento_id', { departamento_id: id }).getMany();
    }
    queryClient(identificationcard) {
        return this.clientRepository.createQueryBuilder('client').where('client.identificationcard=:identificationcard', { identificationcard }).getOne();
    }
    queryClientById(id) {
        return this.clientRepository.createQueryBuilder('client').where('client.id=:id', { id }).getOne();
    }
    updateClietAccommodateById(id_client, state) {
        return this.clientRepository.createQueryBuilder().update(accommodate_1.Accommodate).set({ state }).where('id_client=:id_client', { id_client }).execute();
    }
};
ClientService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(departamentos_1.Departamentos)),
    __param(1, typeorm_1.InjectRepository(municipios_1.Municipios)),
    __param(2, typeorm_1.InjectRepository(accommodate_1.Accommodate)),
    __param(3, typeorm_1.InjectRepository(client_1.Client)),
    __metadata("design:paramtypes", [index_1.Repository,
        index_1.Repository,
        index_1.Repository,
        index_1.Repository])
], ClientService);
exports.ClientService = ClientService;
//# sourceMappingURL=client.service.js.map