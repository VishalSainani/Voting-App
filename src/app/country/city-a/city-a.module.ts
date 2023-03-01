import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityAComponent } from './city-a/city-a.component';
import { CityAResultComponent } from './city-aresult/city-aresult.component';



@NgModule({
  declarations: [
    CityAComponent,
    CityAResultComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CityAModule { }
