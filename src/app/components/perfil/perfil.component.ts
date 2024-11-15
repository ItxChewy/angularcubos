import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ServiceSeguridad } from '../../services/seguridad.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
public usuario !: Usuario
constructor(private _service:ServiceSeguridad){}
ngOnInit(): void {
  this.loadUsuario()
}
loadUsuario(){
  this._service.perfilUsuario().subscribe(response =>{
    this.usuario = response.data
  })
}
}
