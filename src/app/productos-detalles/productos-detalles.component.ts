import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/Models/producto.model';

@Component({
  selector: 'app-productos-detalles',
  templateUrl: './productos-detalles.component.html',
  styleUrls: ['./productos-detalles.component.css']
})
export class ProductosDetallesComponent implements OnInit {
  apiUrl = 'https://fakestoreapi.com/products';
  productoDetalle!: Producto | null;
  /*
  arrayProductoDetalle!: Producto | null = 
  le dice al compilador de TypeScript:
  “Tranquilo, sé que esta propiedad no será null o undefined cuando la use, aunque tú no lo puedas verificar ahora.”
  */
  constructor(
    private _route: ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      const productoId = params['productoId']
      this.fetchProductos(productoId)
    })
  }

  async fetchProductos(id: number) {
    try {
      const res = await fetch(`${this.apiUrl}/${id}`);
      const data = await res.json()
      this.productoDetalle = data;
    } catch (error) {
      console.error('Ha ocurrido un error: ', error)
    }
  }

  agregarCarrito(id : number){

  }

  regresar(){
    this._router.navigate(['/productos'])
  }

}
