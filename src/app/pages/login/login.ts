import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  usuario = { correo: '', contrasena: '' };
  error = false;

  constructor(private router: Router) {}

  login(): void {
    if (this.usuario.correo === 'admin@admin.com' && this.usuario.contrasena === 'admin') {
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.usuario));
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}

