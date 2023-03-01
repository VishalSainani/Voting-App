import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CountryComponent } from './country/country.component';
import { CountryResultComponent } from './country-result/country-result.component';
import { CityAModule } from './city-a/city-a.module';
import { CityBModule } from './city-b/city-b.module';
import { ResultComponent } from './result/result.component';
import { CityCModule } from './city-c/city-c.module';


@NgModule({
  declarations: [
    CountryComponent,
    CountryResultComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CityAModule,
    CityBModule,
    CityCModule,

  ]
})
export class CountryModule { }
