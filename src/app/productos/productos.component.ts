import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/Models/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  urlFetch: string = 'https://fakestoreapi.com/products';
  arrayProductos: Producto[] = [];

  constructor() { }

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

  ngOnInit(): void {
    this.FetchProductos()
  }
}
