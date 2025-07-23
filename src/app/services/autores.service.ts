// autores.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AutoresService {
  private url = 'https://apiclases.inacode.cl/biblioteca/autores';

  constructor(private http: HttpClient) {}

  getAutores() {
    return this.http.get(this.url);
  }

  getAutor(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  createAutor(data: any) {
    return this.http.post(this.url, data);
  }

  updateAutor(id: number, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  deleteAutor(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
