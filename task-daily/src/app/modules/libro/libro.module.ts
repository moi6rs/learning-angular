import { CommonModule } from '@angular/common';
import { FormLibroComponent } from './form-libro/form-libro.component';
import { LibroRoutingModule } from './libro.routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FormLibroComponent],
  imports: [
    CommonModule,
    LibroRoutingModule
  ]
})
export class LibroModule { }
