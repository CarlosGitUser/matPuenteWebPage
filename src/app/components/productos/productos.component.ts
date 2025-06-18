import { Component } from '@angular/core';
import { HerosectionComponent } from '../herosection/herosection.component';
import { FiltrarProductosComponent } from '../filtrar-productos/filtrar-productos.component';
import { ProductosVistaComponent } from '../productos-vista/productos-vista.component';
import { PaginationCuadradoComponent } from '../pagination-cuadrado/pagination-cuadrado.component';


@Component({
  selector: 'app-productos',
  imports: [
    HerosectionComponent,
    FiltrarProductosComponent,
    ProductosVistaComponent,
    PaginationCuadradoComponent
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

}
