import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { NgModule } from '@angular/core';
import { FormLibroComponent } from './moudles/libro/form-libro/form-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    CardOneComponent, CardTwoComponent, FormLibroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
