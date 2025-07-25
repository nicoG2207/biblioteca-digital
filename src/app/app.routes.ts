import { Routes } from '@angular/router';

export const routes: Routes = [  
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },

  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout').then(m => m.Layout),
    children: [
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
      {
        path: 'autores',
        loadChildren: () =>
          import('./pages/autores/autores.routes').then(m => m.AUTORE_ROUTES)
      },
      {
        path: 'prestamos',
        loadComponent: () =>
          import('./pages/prestamos/prestamos').then(m => m.PrestamosComponent) 
      },
        {
    path: 'libros',
    loadComponent: () => import('./pages/libros/libros').then(m => m.Libros)
  },
  {
    path: 'libros/agregar',
    loadComponent: () => import('./pages/libros/crud-libros/crud-libros').then(m => m.CrudLibros)
  },
  {
    path: 'libros/editar/:id',
    loadComponent: () => import('./pages/libros/crud-libros/crud-libros').then(m => m.CrudLibros)
  },

  ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
