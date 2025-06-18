import { FormsModule } from '@angular/forms';
import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-consultas',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css',
  
})
export class ConsultasComponent implements OnInit{

  tablasDisponibles = ['Cliente', 'Compra', 'DetallesCompra', 'DetallesPedido', 'DetallesVenta', 'Empleado', 'Pedido', 'Producto', 'Proveedor', 'Venta'];
  tablaSeleccionada: string = '';
  datos: any[] = [];
  error: string = '';
  cargando: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  onTablaSeleccionada(): void {
    if (!this.tablaSeleccionada) return;
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando = true;
    this.error = '';

    const request = {
      tabla: this.tablaSeleccionada,
      campos: ['*'],
      condiciones: []
    };

    this.http.post<any>('http://localhost:3000/api/consultas', request).subscribe({
      next: (response) => {
        this.datos = response;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los datos: ' + (err.error?.message || err.message);
        this.cargando = false;
      }
    });
  }
}
