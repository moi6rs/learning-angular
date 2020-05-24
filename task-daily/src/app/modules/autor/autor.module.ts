import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { FormAutorComponent } from './form-autor/form-autor.component';


@NgModule({
  declarations: [FormAutorComponent],
  imports: [
    CommonModule,
    AutorRoutingModule
  ]
})
export class AutorModule { }
