import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VegetblesComponent } from './vegetbles/vegetbles.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VegetblesComponent,
    VegetableListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
