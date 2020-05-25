import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewChildren,
  ViewContainerRef
} from "@angular/core";

import { CircleComponent } from "./components/circle/circle.component";
import { SquareComponent } from "./components/square/square.component";
import { TriangleComponent } from "./components/triangle/triangle.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild('figureContainer', {read: typeof ViewContainerRef}) figureContainer;
  activeTab = 0;
  tabs = [
    {
      title: 'Triangulo',
      component: TriangleComponent
    },
    {
      title: 'Circulo',
      component: CircleComponent
    },
    {
      title: 'Cuadrado',
      component: SquareComponent
    }
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {

  }

  changeTab(pos) {
    this.activeTab = pos;
    const factory = this.componentFactoryResolver.resolveComponentFactory(this.tabs[pos].component);
    this.figureContainer.createComponent(factory);
    this.figureContainer.changeDetectorRef.detectChanges();
  }
}
