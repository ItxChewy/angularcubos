import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceSeguridad } from '../../services/seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
@ViewChild("cajauser") cajaUser !: ElementRef;
@ViewChild("cajacontra") cajaContra !: ElementRef;

constructor(private _service:ServiceSeguridad,
  private _router:Router
){}

iniciarSesion(){
  let user = this.cajaUser.nativeElement.value;
  let contra = this.cajaContra.nativeElement.value;
  this._service.login(user,contra).subscribe(response=>{
    //console.log(response.data.response)
    localStorage.setItem('token',response.data.response)
    this._router.navigate(["/perfil"])
  })
}
}
