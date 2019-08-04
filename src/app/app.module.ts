import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BaiTapComponent } from './bai-tap/bai-tap.component';
@NgModule({
  declarations: [
    AppComponent,
    BaiTapComponent
  ],
  imports: [
    BrowserModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
