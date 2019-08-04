import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import { BaitapComponent } from './baitap.component';



@NgModule({
  declarations: [BaitapComponent],
  imports: [
    CommonModule,NgxPaginationModule
  ],
  exports:[BaitapComponent]
})
export class BaitapModule { }
