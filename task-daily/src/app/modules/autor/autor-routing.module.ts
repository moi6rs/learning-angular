import { RouterModule, Routes } from '@angular/router';

import { FormAutorComponent } from './form-autor/form-autor.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'form',
    component: FormAutorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorRoutingModule {}
