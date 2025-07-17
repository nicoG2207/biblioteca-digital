import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Importa esto
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // ✅ Agrégalo aquí
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {}
