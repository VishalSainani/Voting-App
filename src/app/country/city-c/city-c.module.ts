import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCComponent } from './city-c/city-c.component';
import { CityCresultComponent } from './city-cresult/city-cresult.component';



@NgModule({
  declarations: [
    CityCComponent,
    CityCresultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CityCModule { }
