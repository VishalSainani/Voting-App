import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityBResultComponent } from './city-bresult/city-bresult.component';
import { CityBComponent } from './city-b/city-b.component';



@NgModule({
  declarations: [
    CityBResultComponent,
    CityBComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CityBModule { }
