import { Component, DoCheck, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/cubos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.css'
})
export class MarcasComponent implements OnInit,DoCheck {
  public cubos!:Array<Cubo>
  public paramActual !: string
  constructor(private _service:ServiceCubos,
    private _activateRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params:Params) =>{
      this.paramActual = params["id"]
      this.loadCubos(this.paramActual)
    })
  }
  ngDoCheck(): void {
    this._activateRoute.params.subscribe((params:Params) =>{
      let nuevoid = params["id"];
      if(nuevoid != this.paramActual){
        this.paramActual = nuevoid;
        this.loadCubos(this.paramActual)
      }
    })
  }

  loadCubos(id:string){
    this._service.getCubosPorMarca(id).subscribe(response =>{
      //console.log(response.data)
      this.cubos = response.data
      
    })
  }
    
}
