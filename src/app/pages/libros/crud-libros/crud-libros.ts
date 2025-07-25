import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Libro } from '../../../models/libro.model';
import { LibrosService } from '../../../services/libro.service';

@Component({
  selector: 'app-crud-libros',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './crud-libros.html',
  styleUrls: ['./crud-libros.css']
})
export class CrudLibros implements OnInit {
  libro: Libro = { titulo: '', id_autor: 0 };
  editMode = false;

  constructor(
    private librosService: LibrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.librosService.getAll().subscribe(libros => {
        const libroEncontrado = libros.find(l => l.id === +id);
        if (libroEncontrado) {
          this.libro = libroEncontrado;
        }
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    if (this.editMode) {
      this.librosService.update(this.libro.id!, this.libro).subscribe({
        next: () => {
          this.router.navigate(['/libros']);
        },
        error: (err) => {
          alert('ERROR: La API no pudo actualizar el libro.');
          console.error('Respuesta del error de la API:', err);
        }
      });
    } else {
      this.librosService.create(this.libro).subscribe(() => {
        this.router.navigate(['/libros']);
      });
    }
  }
}

