import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
