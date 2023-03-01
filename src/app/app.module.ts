import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PositionComponent } from './position/position.component';
import { CandidateComponent } from './candidate/candidate.component';
import { ListComponent } from './list/list.component';
import { CountryModule } from './country/country.module';

@NgModule({
  declarations: [
    AppComponent,
    PositionComponent,
    CandidateComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
