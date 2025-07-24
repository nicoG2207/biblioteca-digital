// src/app/pages/prestamos/prestamos.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from '../../models/prestamo.model';



@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos.html',
  styleUrls: ['./prestamos.scss']
})
export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = [];
  nuevoPrestamo: Prestamo = {
    CodigoLibro: 0,
    nombreUsuario: '',
    correoUsuario: '',
    nombreLibro: '',
    fecha_prestamo: '',
    fecha_devolucion: ''
  };

  constructor(private prestamosService: PrestamosService) {}

  ngOnInit(): void {
    this.cargarPrestamos();
  }

  cargarPrestamos(): void {
    this.prestamosService.getAll().subscribe(data => {
      this.prestamos = data;
    });
  }

  agregarPrestamo(): void {
    const prestamoFormateado: Prestamo = {
      ...this.nuevoPrestamo,
      fecha_prestamo: new Date(this.nuevoPrestamo.fecha_prestamo).toISOString(),
      fecha_devolucion: new Date(this.nuevoPrestamo.fecha_devolucion).toISOString()
    };

    this.prestamosService.create(prestamoFormateado).subscribe(() => {
      this.cargarPrestamos(); // Refresca la lista
      this.nuevoPrestamo = {
        CodigoLibro: 0,
        nombreUsuario: '',
        correoUsuario: '',
        nombreLibro: '',
        fecha_prestamo: '',
        fecha_devolucion: ''
      };
    });
  }


  eliminarPrestamo(codigo: number): void {
    if (confirm('¿Estás seguro de eliminar este préstamo?')) {
      this.prestamosService.delete(codigo).subscribe(() => {
        this.cargarPrestamos();
      });
    }
  }
}
