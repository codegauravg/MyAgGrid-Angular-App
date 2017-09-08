import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular/main';

import { AppComponent } from './app.component';
import { MyGridComponent } from './my-grid/my-grid.component';
import { ColorCompComponent } from './color-comp/color-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent,
    ColorCompComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(
      [ColorCompComponent]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
