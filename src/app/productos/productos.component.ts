import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/Models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  urlFetch: string = 'https://fakestoreapi.com/products';
  arrayProductos: Producto[] = [];
  urlDetalleProducto : string = `${this.urlFetch} `

  constructor(
    private _router : Router
  ) { }

  async FetchProductos(): Promise<void> {
    try {
      const res = await fetch(this.urlFetch);
      const data = await res.json();
      this.arrayProductos = data;
      console.log(this.arrayProductos)
    } catch (error) {
      console.error('Ha ocurrido el siguiente error: ', error)
    }
  }

  productoDetalle(productoId : number){
    this._router.navigate(['/productos', productoId])
  }

  agregarCarrito(id : number){

  }

  ngOnInit(): void {
    this.FetchProductos()
  }
}
