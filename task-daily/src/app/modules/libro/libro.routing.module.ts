import { RouterModule, Routes } from '@angular/router';

import { FormLibroComponent } from './form-libro/form-libro.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'form',
    component: FormLibroComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibroRoutingModule { }
