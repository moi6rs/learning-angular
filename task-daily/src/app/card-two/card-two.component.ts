import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-card-two",

  template: `
    <div class="card"></div>
    <style>
      .card {
        background-image: url(../../assets/goku-original.webp);
        background-size: cover;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
        height: 300px;
        margin: 20px;
        width: 300px;
      }
    </style>
  `,
  encapsulation: ViewEncapsulation.Emulated
  /*templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']*/
})
export class CardTwoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
