import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Libro } from '../../models/libro.model';
import { LibrosService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './libros.html',
  styleUrls: ['./libros.css']
})
export class Libros implements OnInit {
  libros: Libro[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.librosService.getAll().subscribe((data: Libro[]) => {
      this.libros = data;
    });
  }

  eliminarLibro(id: number | undefined): void {
    if (!id) return;
    if (confirm('¿tai seguro de que quieres eliminar este libro?')) {
      this.librosService.delete(id).subscribe(() => {
        this.cargarLibros();
      });
    }
  }
}