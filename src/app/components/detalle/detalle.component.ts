import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
public cubo !:Cubo
public comentarios !:Array<Comentario>
constructor(private _service:ServiceCubos,
  private _activeRoute:ActivatedRoute
){}

ngOnInit(): void {
  this._activeRoute.params.subscribe((params:Params) =>{
    let id = params["id"]
    this.loadCubo(id)
  })
}
loadCubo(id:string){
this._service.getCuboId(id).subscribe(response =>{
  this.cubo = response.data
  let idCubo = this.cubo.idCubo.toString()
  this.loadComentarios(idCubo)
})
}
loadComentarios(id:string){
this._service.getCuboComentario(id).subscribe(response =>{
  //console.log(response.data)
  this.comentarios = response.data
})
}

}
