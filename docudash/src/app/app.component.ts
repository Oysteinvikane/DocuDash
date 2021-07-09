import { Component } from '@angular/core';
import { categories } from "./data.categories";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'DocDash';
  public dropDownItems = categories;
  public defaultItem = { text: "Filter by category", value: null};
}
