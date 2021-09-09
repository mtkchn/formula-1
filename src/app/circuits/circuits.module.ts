import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircuitsService } from '../circuits.service';
import { CircuitsComponent } from './circuits.component';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [CircuitsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    ButtonModule,
    CarouselModule,
    DropdownModule,
    TableModule,
    DataViewModule,
    CardModule
  ],
  providers: [CircuitsService],
  exports: [CircuitsComponent],
})
export class CircuitsModule { }
