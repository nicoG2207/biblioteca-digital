import { Routes } from '@angular/router';
import { AutoresListComponent } from './autores-list/autores-list.component';
import { AutoresFormComponent } from './autores-form/autores-form.component';

export const AUTORE_ROUTES: Routes = [
  { path: '', component: AutoresListComponent },
  { path: 'nuevo', component: AutoresFormComponent },
  { path: 'editar/:id', component: AutoresFormComponent },
];