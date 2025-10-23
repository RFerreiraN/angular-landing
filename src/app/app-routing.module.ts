import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';

const routes: Routes = [
  { path : '', component : HomeComponent},
  { path : 'productos', component : ProductosComponent},
  { path : 'productos/:productoId', component : ProductosDetallesComponent},
  { path : 'carrito', component : CarritoComponent },
  { path : 'contacto', component : ContactoComponent },
  { path : '**' , redirectTo : ''} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
