import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from '../../models/prestamo.model';
import { PrestamoCreate } from '../../models/prestamo-create.model';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prestamos.html',
  styleUrls: ['./prestamos.scss']
})

export class PrestamosComponent implements OnInit {
  prestamos: Prestamo[] = [];

  nuevoPrestamo: PrestamoCreate = {
    id_usuario: 0,
    id_libro: 0,
    fecha_prestamo: '',
    fecha_devolucion: ''
  };

  constructor(private prestamosService: PrestamosService) {}

  ngOnInit(): void {
    this.cargarPrestamos();
  }

  cargarPrestamos(): void {
    this.prestamosService.getPrestamos().subscribe({
      next: (data) => {
        this.prestamos = data;
      },
      error: (err) => {
        console.error('Error al cargar préstamos:', err);
      }
    });
  }

  agregarPrestamo(): void {
    this.prestamosService.create(this.nuevoPrestamo).subscribe({
      next: () => {
        this.cargarPrestamos(); // Refresca la lista
        this.nuevoPrestamo = {
          id_usuario: 0,
          id_libro: 0,
          fecha_prestamo: '',
          fecha_devolucion: ''
        };
      },
      error: (err) => {
        console.error('Error al agregar préstamo:', err);
        alert('Ocurrió un error al agregar el préstamo. Verifica los datos.');
      }
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
