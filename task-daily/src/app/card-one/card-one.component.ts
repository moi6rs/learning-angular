import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-card-one",
  template: `
    <div class="card">Hard Times</div>
    <style>
      .card {
        background-color: #ffee88;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        height: 195px;
        margin: 20px;
        width: 300px;
      }
    </style>
  `,
  /*templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']*/
})
export class CardOneComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
