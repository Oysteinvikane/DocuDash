import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { GridModule } from '@progress/kendo-angular-grid';
import { AppComponent } from './app.component';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { PopupModule } from '@progress/kendo-angular-popup';



@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        GridModule,
        IndicatorsModule,
        IconsModule,
        InputsModule,
        NavigationModule,
        ProgressBarModule,
        PopupModule
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
