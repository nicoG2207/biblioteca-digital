import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({ providedIn: 'root' })
export class UsuariosService {
  private apiUrl = 'https://apiclases.inacode.cl/biblioteca/usuarios';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  create(usuario: Usuario): Observable<Usuario> {
    const payload = {
      ...usuario,
      contraseña: usuario.contrasena // convierte a lo que espera la API
    };
    delete (payload as any).contrasena;

    return this.http.post<Usuario>(this.apiUrl, payload);
  }

  update(id: number, usuario: Usuario): Observable<void> {
    const payload = {
      ...usuario,
      contraseña: usuario.contrasena
    };
    delete (payload as any).contrasena;

    return this.http.put<void>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

