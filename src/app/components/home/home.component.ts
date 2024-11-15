import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubos } from '../../services/cubos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos !:Array<Cubo>
  constructor(private _service:ServiceCubos){

  }
  ngOnInit(): void {
    this.loadCubos()
  }
  loadCubos(){
    this._service.getCubos().subscribe(response =>{
      //console.log(response)
      this.cubos = response.data
    })
  }

}
