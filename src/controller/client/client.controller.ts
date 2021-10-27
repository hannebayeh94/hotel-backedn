import * as moment from 'moment';
import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ClientService} from "../../services/client.service";
import {RoomService} from "../../services/room.service";

@Controller('client')
export class ClientController {

    constructor(private readonly _client: ClientService, private readonly _room: RoomService) {
    }

    @Post('create-client')
    async createClient(@Body() client) {

        let {name,
            telephone,
            type_document,
            identificationcard,
            date_of_expedition,
            origin,
            number_room,
            number_day,
            number_persons,
            registration_date
        } = client;

        const room = await this._room.queryRoom(number_room);
        if(room.state){
            return {state: false, error: 'La habitación ya no esta disponible'};
        }

        let stay: any = moment(new Date()).unix();
            stay = stay.toString();

        try{
            let _id = null;
            let client = await this._client.queryClient(identificationcard);
            if(client != null){
                _id = client.id;
            }else{
                const saveClient: any = await this._client.saveClient({id: null, name, telephone, type_document, identificationcard, date_of_expedition, registration_date});
                let {id} = saveClient.generatedMaps[0];
                _id = id;
            }
            await this._client.saveAccommodate({id:null, origin, number_room, number_day, number_persons, stay, state: true, id_client: _id});
            await this._room.updateStateRoom(true, room.number_room);
        }catch (e){
            throw 'Error al guardar, comprueba si la base de datos esta activa'
        }

        return {state: true, client};
    }

    @Get('list-deparment')
    async listDeparment() {
        return await this._client.queryListDeparment();
    }

    @Get('getCityOrMunicipality/:id')
    async getListCityOrMunicipality(@Param('id') id: number) {
        return await this._client.queryListCityOrMunicipalityById(id);
    }

    @Get('getClient/:identificationcard')
    async getClient(@Param('identificationcard') identificationcard) {
        const client = await this._client.queryClient(identificationcard);
        if(client != null){
            return {client};
        }else{
            return {client: null};
        }
    }

    @Get('getClientById/:id')
    async getClientById(@Param('id') id){
        return await this._client.queryClientById(id);
    }

    @Get('update-room/:id_client/:state')
   async updateClientAccommodateById(@Param() param){
       return await this._client.updateClietAccommodateById(param.id_client, param.state);
    }
}
