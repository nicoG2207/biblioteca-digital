import { Routes } from '@angular/router';

export const routes: Routes = [  
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout').then(m => m.Layout),
    children: [
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
      //{
      //  path: 'libros',
      //  loadComponent: () =>
      //    import('./pages/libros/libros-list.component').then(m => m.LibrosListComponent) // ejemplo
      //},
      {
        path: 'prestamos',
        loadComponent: () =>
          import('./pages/prestamos/prestamos').then(m => m.PrestamosComponent) // ejemplo
      },
      {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
