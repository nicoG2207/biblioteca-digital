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
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login').then(m => m.LoginComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
