import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prestamo } from '../models/prestamo.model';
import { PrestamoCreate } from '../models/prestamo-create.model';

@Injectable({ providedIn: 'root' })
export class PrestamosService {
  private apiUrl = 'https://apiclases.inacode.cl/biblioteca/prestamos';

  constructor(private http: HttpClient) {}

  //Obtiene todos los prestamos
  getPrestamos(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  //Crear un prestamo
  create(prestamo: PrestamoCreate): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  //Eliminar un prestamo
  delete(id_libro: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id_libro}`);
  }
}