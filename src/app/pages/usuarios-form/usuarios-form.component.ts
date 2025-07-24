import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../models/usuario.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usuarios-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss']
})
export class UsuariosFormComponent implements OnInit {
  usuario: Usuario = { nombre: '', correo: '', contrasena: '' };
  esEdicion = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.esEdicion = true;
      this.usuariosService.getById(+id).subscribe((data: Usuario) => {
        this.usuario = {
          id: data.id, // 👈 asegúrate de incluir el ID
          nombre: data.nombre,
          correo: data.correo,
          contrasena: '' // 👈 opcionalmente en blanco por seguridad
        };
      });
    }
  }



  guardar(): void {
    if (this.esEdicion && this.usuario.id) {
      this.usuariosService.update(this.usuario.id, this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    } else {
      this.usuariosService.create(this.usuario).subscribe(() => {
        this.router.navigate(['/usuarios']);
      });
    }
  }
}