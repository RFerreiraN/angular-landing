import { Component, OnInit } from '@angular/core';
import { productosList } from './productosLimpieza.mock';

@Component({
  selector: 'app-productos-limpieza',
  templateUrl: './productos-limpieza.component.html',
  styleUrls: ['./productos-limpieza.component.css']
})
export class ProductosLimpiezaComponent implements OnInit{
    constructor(){}

    productosList = productosList;

    ngOnInit(): void {
      
    }
}
