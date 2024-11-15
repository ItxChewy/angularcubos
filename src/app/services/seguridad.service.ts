import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { from, Observable } from "rxjs";
import axios from "axios";
import { Cubo } from "../models/cubo";

@Injectable()
export class ServiceSeguridad{
    
    login(user:string,password:string):Observable<any>{
        let usuario = {
            email:user,
            password:password
        }
        let request = "api/manage/login"
        let url = environment.urlApi + request
        return from(axios.post(url,usuario))
    }

    perfilUsuario():Observable<any>{
        let request = "api/manage/perfilusuario"
        let url = environment.urlApi + request
        let token = localStorage.getItem('token')
        const headers = {"Authorization":"bearer " + token}
        return from(axios.get(url,{headers}))

    }

    verCompras():Observable<any>{
        let request = "api/compra/comprasusuario"
        let url = environment.urlApi + request
        let token = localStorage.getItem('token')
        const headers = {"Authorization":"bearer " + token}
        return from(axios.get(url,{headers}))
    }
    comprarCubo(id:string,cubo:Cubo):Observable<any>{
        let request = "api/compra/insertarpedido/" + id
        let url = environment.urlApi + request;
        let token = localStorage.getItem('token')
        const headers = {"Authorization":"bearer " + token}
        return from(axios.post(url,cubo,{headers}))

    }
}