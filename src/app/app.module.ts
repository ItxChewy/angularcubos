import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ServiceCubos } from './services/cubos.service';
import { MarcasComponent } from './components/marcas/marcas.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceSeguridad } from './services/seguridad.service';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';

import { PedidoComponent } from './components/pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MarcasComponent,
    DetalleComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceCubos,ServiceSeguridad],
  bootstrap: [AppComponent]
})
export class AppModule { }
