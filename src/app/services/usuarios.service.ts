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
      nombre: usuario.nombre,
      correo: usuario.correo,
      contraseña: usuario.contrasena
    };
    return this.http.post<Usuario>(this.apiUrl, payload);
  }

  update(id: number, usuario: Usuario): Observable<void> {
    const payload = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      contraseña: usuario.contrasena
    };
    return this.http.put<void>(`${this.apiUrl}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}