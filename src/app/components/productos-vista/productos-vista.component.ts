import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-vista',
  templateUrl: './productos-vista.component.html',
  styleUrls: ['./productos-vista.component.css']
})
export class ProductosVistaComponent implements OnInit {

  productos: any[] = []; 
  paginaActual = 1;
  productosPorPagina = 50;

ngOnInit(): void {
  this.productos = Array.from({ length: 8 }, (_, i) => ({
    nombre: `Herramienta #${i + 1}`,
    imagen_url: 'assets/img/martillo.png', // es para un ejemplo
    precio_original: 120,
    precio_oferta: i % 2 === 0 ? 90 : null,
    tiene_oferta: i % 2 === 0
  }));
}


  get totalPaginas(): number {
    return Math.ceil(this.productos.length / this.productosPorPagina);
  }

  get totalPaginasArray(): number[] {
    return Array(this.totalPaginas).fill(0).map((_, i) => i + 1);
  }
}