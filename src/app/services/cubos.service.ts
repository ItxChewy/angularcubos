import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { from, Observable } from "rxjs";
import axios from "axios";

@Injectable()
export class ServiceCubos{
    getCubos():Observable<any>{
        let request = "api/cubos"
        let url = environment.urlApi + request
        return from(axios.get(url))
    }
    getMarcas():Observable<any>{
        let request = "api/cubos/marcas"
        let url = environment.urlApi + request
        return from(axios.get(url))
    }

    getCubosPorMarca(id:string):Observable<any>{
        let request = "api/cubos/cubosmarca/" + id;
        let url = environment.urlApi + request
        return from(axios.get(url))
    }
    getCuboId(id:string):Observable<any>{
        let request = "api/cubos/" + id
        let url = environment.urlApi + request
        return from(axios.get(url))
    }
    getCuboComentario(id:string):Observable<any>{
        let request = "api/comentarioscubo/getcomentarioscubo/" + id
        let url = environment.urlApi + request;
        return from(axios.get(url))
    }
}