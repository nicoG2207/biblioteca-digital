import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresService } from '../../../services/autores.service';
import { Autor } from '../../../models/autor.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-autores-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './autores-list.component.html',
  styleUrls: ['./autores-list.component.scss']
})

export class AutoresListComponent implements OnInit{

  //Lista
  autores: Autor[] = [];

  constructor(private autoresService: AutoresService) {}

  ngOnInit(): void {      //Se ejecuta automaticamente cuando se inicializa
    this.cargarAutores();
  }

  //Trae lista de autores
  cargarAutores(): void {
    this.autoresService.getAutores().subscribe({
      next: (datos: Autor[]) => this.autores = datos,  //Los guarda
      error: (error) => console.error(error)  //Captura errores
    });
  }
  //Elimina y actualiza lista de autores
  eliminarAutor(id: number): void {
    this.autoresService.deleteAutor(id).subscribe({
      next: () => this.cargarAutores(),
      error: (error) => console.error(error)
    });
  }
}
