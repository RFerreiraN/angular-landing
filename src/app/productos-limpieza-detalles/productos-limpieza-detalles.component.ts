import { Component, OnInit } from '@angular/core';
import { productosList } from '../productos-limpieza/productosLimpieza.mock';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/Models/producto.model';

@Component({
  selector: 'app-productos-limpieza-detalles',
  templateUrl: './productos-limpieza-detalles.component.html',
  styleUrls: ['./productos-limpieza-detalles.component.css']
})
export class ProductosLimpiezaDetallesComponent implements OnInit{
  productosList: Producto[] = productosList;
  producto? : Producto;

  constructor( private _router : ActivatedRoute ) { }

  ngOnInit(): void {
    this._router.params.subscribe(params => {
      this.producto = this.productosList.find(producto => producto.id == params['Id'])
      console.log(this.producto)
    })
  }

}
