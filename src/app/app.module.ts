import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosRestauranteComponentComponent } from './datos-restaurante.component/datos-restautante.component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { CanvasComponent } from './canvas/canvas.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { NuevaSucursalComponent } from './nueva-sucursal/nueva-sucursal.component';
import { NuevoIngredienteComponent } from './nuevo-ingrediente/nuevo-ingrediente.component';
import { NuevoPlatilloComponent } from './nuevo-platillo/nuevo-platillo.component';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';
import { ModificarSucursalComponent } from './modificar-sucursal/modificar-sucursal.component';
import { ModificarPlatilloComponent } from './modificar-platillo/modificar-platillo.component';
import { ModificarIngredienteComponent } from './modificar-ingrediente/modificar-ingrediente.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatosRestauranteComponentComponent,
    NavbarComponent,
    HeadComponent,
    CanvasComponent,
    SidebarComponent,
    PedidosComponent,
    PlatillosComponent,
    IngredientesComponent,
    NuevaSucursalComponent,
    NuevoIngredienteComponent,
    NuevoPlatilloComponent,
    VerPedidoComponent,
    ModificarSucursalComponent,
    ModificarPlatilloComponent,
    ModificarIngredienteComponent,
    LoginComponent,
    HomeComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
