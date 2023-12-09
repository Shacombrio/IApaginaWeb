import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosRestautanteComponentComponent } from './datos-restautante.component/datos-restautante.component.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { NuevaSucursalComponent } from './nueva-sucursal/nueva-sucursal.component';
import { NuevoIngredienteComponent } from './nuevo-ingrediente/nuevo-ingrediente.component';
import { NuevoPlatilloComponent } from './nuevo-platillo/nuevo-platillo.component';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';

const routes: Routes = [
  {path:'DatosRestaurante', component: DatosRestautanteComponentComponent},
  {path: 'Platillos', component: PlatillosComponent},
  {path: 'Pedidos', component:PedidosComponent},
  {path: 'Ingredientes', component:IngredientesComponent},
  {path: 'NuevaSucursal', component:NuevaSucursalComponent},
  {path: 'NuevoIngrediente', component:NuevoIngredienteComponent},
  {path: 'NuevoPlatillo', component:NuevoPlatilloComponent},
  {path: 'VerPedido', component:VerPedidoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
