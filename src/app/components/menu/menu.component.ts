import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/cubos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
public marcas !:Array<string>
constructor(private _service:ServiceCubos,
  private router:Router
){}

ngOnInit(): void {
  this.loadMarcas()
}
loadMarcas(){
  this._service.getMarcas().subscribe(response =>{
    //console.log(response.data)
    this.marcas = response.data
  })
}
comprobarToken():boolean{
  if(localStorage.getItem('token')){
    return true
  }else{
    return false
  }
}

cerrarSesion():void{
  localStorage.removeItem('token')
  alert("Sesion cerrada")
  this.router.navigate(["/"])
}
}
