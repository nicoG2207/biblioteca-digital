import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { AutoresService } from '../../../services/autores.service';
import { Autor } from '../../../models/autor.model';


@Component({
  selector: 'app-autores-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './autores-form.component.html',
  styleUrls: ['./autores-form.component.scss']
})

export class AutoresFormComponent implements OnInit{

  autorForm!: FormGroup;
  idAutor?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private autoresService: AutoresService
  ) {}

  ngOnInit(): void {
    this.autorForm = this.fb.group({
      nombre: ['', Validators.required],
      nacionalidad: ['', Validators.required]
    });

    // Revisar si venimos a editar
    this.idAutor = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idAutor) {
      this.autoresService.getAutor(this.idAutor).subscribe({
        next: (data: Autor) => this.autorForm.patchValue(data),
        error: (err) => console.error('Error al cargar autor:', err)
      });
    }
  }

  guardar(): void {
    if (this.autorForm.invalid) return;

    const datos: Omit<Autor, 'id'> = this.autorForm.value;

    if (this.idAutor) {
      // Editar
      this.autoresService.updateAutor(this.idAutor, datos).subscribe({
        next: () => this.router.navigate(['/autores']),
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      // Crear
      this.autoresService.createAutor(datos).subscribe({
        next: () => this.router.navigate(['/autores']),
        error: (err) => console.error('Error al crear:', err)
      });
    }
  }

}
