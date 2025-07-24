import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: 'prestamos',
  loadComponent: () => import('./pages/prestamos/prestamos').then(m => m.PrestamosComponent)
  },
  {
  path: 'home',
  loadComponent: () =>
    import('./pages/home/home').then(m => m.Home)
  },
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
  // Rutas autores
  {
    path: 'autores',
    loadChildren: () =>
      import('./pages/autores/autores.routes').then(m => m.AUTORE_ROUTES)
  },
  // Ruta login
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },
  // Redirecciones
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
