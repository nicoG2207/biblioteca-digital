import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo.model';

@Injectable({ providedIn: 'root' })
export class PrestamosService {
  private apiUrl = 'https://apiclases.inacode.cl/biblioteca/prestamos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Prestamo[]> {
    return this.http.get<Prestamo[]>(this.apiUrl);
  }

  create(prestamo: Prestamo): Observable<Prestamo> {
    return this.http.post<Prestamo>(this.apiUrl, prestamo);
  }

  delete(codigoLibro: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${codigoLibro}`);
  }
}
