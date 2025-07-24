import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./pages/usuarios-list/usuarios-list.component').then(m => m.UsuariosListComponent)
  },
  {
    path: 'usuarios/nuevo',
    loadComponent: () =>
      import('./pages/usuarios-form/usuarios-form.component').then(m => m.UsuariosFormComponent)
  },
  {
    path: 'usuarios/editar/:id',
    loadComponent: () =>
      import('./pages/usuarios-form/usuarios-form.component').then(m => m.UsuariosFormComponent)
  },
  //Rutas autores
  {
    path: 'autores',
    loadChildren: () =>
      import('./pages/autores/autores.routes').then(m => m.AUTORE_ROUTES)
  },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', redirectTo: 'usuarios' }
];
