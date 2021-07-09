import { Component, ViewEncapsulation } from '@angular/core';
import { categories } from "./data.categories";
import { GridDataResult, PageChangeEvent } from "@progress/kendo-angular-grid";
import { SortDescriptor } from "@progress/kendo-data-query";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService],

  template: `
    <kendo-appbar position="top">
      <kendo-appbar-section>
        <button class="k-button k-button-clear">
          <kendo-icon name="menu"></kendo-icon>
        </button>
      </kendo-appbar-section>

      <kendo-appbar-section>
        <h1 class="title">Kendo UI for Angular</h1>
      </kendo-appbar-section>

      <kendo-appbar-spacer width="32px"></kendo-appbar-spacer>

      <kendo-appbar-section>
        <ul>
          <li><span>What's New</span></li>
          <li><span>About</span></li>
          <li><span>Contacts</span></li>
        </ul>
      </kendo-appbar-section>

      <kendo-appbar-spacer></kendo-appbar-spacer>

      <kendo-appbar-section class="actions">
        <kendo-badge-container>
          <button class="k-button k-button-clear">
            <kendo-icon name="bell"></kendo-icon>
          </button>
          <kendo-badge
            shape="dot"
            themeColor="warning"
            size="small"
            position="inside"
          ></kendo-badge>
        </kendo-badge-container>
        <span class="k-appbar-separator"></span>
      </kendo-appbar-section>

      <kendo-appbar-section>
        <avatar
          shape="circle"
          width="26px"
          height="26px"
        ></avatar>
      </kendo-appbar-section>
    </kendo-appbar>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      body {
        background: #adadb1;
      }
      .title {
        font-size: 18px;
        margin: 0;
      }
      kendo-badge-container {
        margin-right: 8px;
      }
      ul {
        font-size: 14px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
      }
      li {
        margin: 0 9px;
      }
      li:hover {
        cursor: pointer;
        color: #d6002f;
      }
      .actions .k-button {
        padding: 0;
      }
    `,
  ],
})

export class AppComponent {

  // used for the DropDownList
  public dropDownItems = categories;
  public defaultItem = { text: "Filter by Category", value: null as number };

  // used for the Grid
  public gridItems: Observable<GridDataResult>;
  public pageSize: number = 10;
  public skip: number = 0;
  public sortDescriptor: SortDescriptor[] = [];
  // public filterDescriptor: FilterDescriptor[] = [];
  public filterTerm: number = null;

  constructor(private service: ProductService) {
    this.loadGridItems();
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadGridItems();
  }

  private loadGridItems(): void {
    this.gridItems = this.service.getProducts(
      this.skip,
      this.pageSize,
      this.sortDescriptor,
      this.filterTerm
    );
  }

  public handleSortChange(descriptor: SortDescriptor[]): void {
    this.sortDescriptor = descriptor;
    this.loadGridItems();
  }

  public handleFilterChange(item: {
    text: string;
    value: number | null;
  }): void {
    this.filterTerm = item.value;
    this.skip = 0;
    this.loadGridItems();
  }
}