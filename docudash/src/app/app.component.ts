import { Component, ViewEncapsulation } from '@angular/core';
import { products } from './products';



@Component({
    selector: 'my-app',
    template: `

    <!--
     * Kendo Appbar top
    -->
    
    <kendo-appbar position="top">
      <kendo-appbar-section>
        <button class="k-button k-button-clear">
          <kendo-icon name="menu"></kendo-icon>
        </button>
      </kendo-appbar-section>

      <kendo-appbar-section>
        <h1 class="title">DocuDash</h1>
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
                <kendo-avatar 
                shape="circle" 
                width="26px" 
                height="26px">
                </kendo-avatar>
            </kendo-appbar-section>
        </kendo-appbar>
      
        <!--
        * Kendo Grid
        -->

      <kendo-grid [data]="gridData" [style.height.%]=90>
          <kendo-grid-column field="ProductID" title="ID">
          </kendo-grid-column>
          <kendo-grid-column field="ProductName" title="Name">
          </kendo-grid-column>
          <kendo-grid-column field="Category.CategoryName" title="Category">
          </kendo-grid-column>
          <kendo-grid-column field="UnitPrice" title="Price">
          </kendo-grid-column>
          <kendo-grid-column field="UnitsInStock" title="In stock">
          </kendo-grid-column>
          <kendo-grid-column field="Discontinued" title="Discontinued">
              <ng-template kendoGridCellTemplate let-dataItem>
                 <input type="checkbox" [checked]="dataItem.Discontinued" disabled/>
              </ng-template>
          </kendo-grid-column>
      </kendo-grid>


        <!--
        * Kendo Appbar-bottom
        -->

        <kendo-appbar class="bottom-appbar" position="bottom" themeColor="dark">
            <kendo-appbar-section>
                <ul>
                    <li><span>What's New</span></li>
                    <li><span>Subscriptions</span></li>
                    <li><span>Successful Stories</span></li>
                    <li><span>About Us</span></li>
                    <li><span>Contacts</span></li>
                </ul>
            </kendo-appbar-section>
        </kendo-appbar>

  `,
  encapsulation: ViewEncapsulation.None,
  styles: [`
      my-app{
        padding: 0
      }
      body {
        background: #FFFFFF;
      }
      .title {
        font-size: 16px;
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
        color: #9493A0;
      }
      .actions .k-button {
        padding: 0;
      }
      .page-content{
          height: 100%;
          background: white;
          padding: 20px 10px;
      }
      .bottom-appbar{
        position: fixed;
        bottom: 0px;
        width: 100%;
        justify-content: center;
      }
    `,
  ],
})

export class AppComponent {
  public gridData: any[] = products;
}