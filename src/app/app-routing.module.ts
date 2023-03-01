import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { CityAComponent } from './country/city-a/city-a/city-a.component';
import { CityAResultComponent } from './country/city-a/city-aresult/city-aresult.component';
import { CityBComponent } from './country/city-b/city-b/city-b.component';
import { CityBResultComponent } from './country/city-b/city-bresult/city-bresult.component';
import { CityCComponent } from './country/city-c/city-c/city-c.component';
import { CityCresultComponent } from './country/city-c/city-cresult/city-cresult.component';
import { CountryResultComponent } from './country/country-result/country-result.component';
import { CountryComponent } from './country/country/country.component';
import { ListComponent } from './list/list.component';
import { PositionComponent } from './position/position.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'add-candidate', component: CandidateComponent },
  { path: 'add-position', component: PositionComponent },
  {
    path: 'country', children: [
      { path: '', component: CountryComponent, pathMatch: 'full' },
      { path: 'result', component: CountryResultComponent, pathMatch: 'full' },
      { path: 'cityA', component: CityAComponent, pathMatch: 'full' },
      { path: 'cityAResult', component: CityAResultComponent, pathMatch: 'full' },
      { path: 'cityB', component: CityBComponent, pathMatch: 'full' },
      { path: 'cityBResult', component: CityBResultComponent, pathMatch: 'full' },
      { path: 'cityC', component: CityCComponent, pathMatch: 'full' },
      { path: 'cityCResult', component: CityCresultComponent, pathMatch: 'full' },

    ]
  },


  // { path: 'delete-candidate/:id', component: CandidateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
