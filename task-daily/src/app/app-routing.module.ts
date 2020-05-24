import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  // first
  {
    path: 'libros',
    loadChildren: () =>
      import('./modules/libro/libro.module').then((m) => m.LibroModule),
  },
  // second
  {
    path: 'autores',
    loadChildren: () => {
      return import('./modules/autor/autor.module').then((m) => m.AutorModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
