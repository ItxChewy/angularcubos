import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/cubos.service';
import { ServiceSeguridad } from '../../services/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {
  @ViewChild("selectcubo") selectCubo !: ElementRef
public cubos !:Array<Cubo>
public cuboSeleccionado !:Cubo
constructor(private _service:ServiceCubos,
  private _serviceS:ServiceSeguridad,
  private _router:Router
){}
ngOnInit(): void {
  this.loadCubos()
}
loadCubos(){
  this._service.getCubos().subscribe(response =>{
    this.cubos = response.data
  })
}
comprarCubo(){
  let id = this.selectCubo.nativeElement.value
  this._service.getCuboId(id).subscribe(response =>{
    this.cuboSeleccionado = response.data
    this._serviceS.comprarCubo(id,this.cuboSeleccionado).subscribe(()=>{
      this._router.navigate(["/compras"])
    })
  })
 
}
}
