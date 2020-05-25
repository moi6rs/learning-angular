import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CircleComponent } from "./components/circle/circle.component";
import { NgModule } from "@angular/core";
import { SquareComponent } from "./components/square/square.component";
import { TriangleComponent } from "./components/triangle/triangle.component";

const ENTRYCOMPONENTS = [SquareComponent, TriangleComponent, CircleComponent];
const COMPONENTS = [AppComponent];
@NgModule({
  declarations: [COMPONENTS, ENTRYCOMPONENTS],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ENTRYCOMPONENTS],
})
export class AppModule {}
