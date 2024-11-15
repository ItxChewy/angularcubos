import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"marcas/:id",component:MarcasComponent
  },
  {
    path:"detalle/:id",component:DetalleComponent
  },
  {
    path:"login", component:LoginComponent
  },
  {
    path:"perfil", component:PerfilComponent
  },
  {
    path:"compras",component:ComprasComponent
  },
  {
    path:"pedido",component:PedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
