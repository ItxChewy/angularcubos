import { Component, OnInit, ViewChild } from '@angular/core';
import { Compra } from '../../models/compra';
import { ServiceSeguridad } from '../../services/seguridad.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit {
public compras!: Array<Compra>
constructor(private _service:ServiceSeguridad){}

ngOnInit(): void {
  this.loadCompras()
}
loadCompras(){
  this._service.verCompras().subscribe(response =>{
    this.compras= response.data
  })
}


}
