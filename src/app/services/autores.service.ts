// Realiza las peticiones a la API
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Autor } from '../models/autor.model';

@Injectable({ providedIn: 'root' })
export class AutoresService {
  private url = 'https://apiclases.inacode.cl/biblioteca/autores';

  constructor(private http: HttpClient) {}

  //Lista completa de los autores - API
  getAutores() {
    return this.http.get<Autor[]>(this.url);
  }

  //Obtiene un solo autor segun su ID
  getAutor(id: number) {
    return this.http.get<Autor>(`${this.url}/${id}`);
  }

  //Crea un nuevo autor
  createAutor(data: Omit<Autor, 'id'>) {
    return this.http.post<Autor>(this.url, data);
  }

  //Actualiza un autor especifico
  updateAutor(id: number, data: Omit<Autor, 'id'>) {
    return this.http.put<{ mensaje: string }>(`${this.url}/${id}`, data);
  }

  //Elimina un autor
  deleteAutor(id: number) {
    return this.http.delete<{ mensaje: string }>(`${this.url}/${id}`);
  }
}
