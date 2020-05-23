import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']*/
  template: `
  <div class="card">
    <app-card-one></app-card-one>
    <app-card-two></app-card-two>
  </div>
`,
})
export class AppComponent {
  title = 'task-daily';
}
