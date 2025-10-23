import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ProductosDetallesComponent } from './productos-detalles/productos-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    CarritoComponent,
    ProductosDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
