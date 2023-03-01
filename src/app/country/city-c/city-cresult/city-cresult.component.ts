import { Component } from '@angular/core';
import { AppDataService } from 'src/app/app-data.service';
import { CityCService } from '../city-c.service';

@Component({
  selector: 'app-city-cresult',
  templateUrl: './city-cresult.component.html',
  styleUrls: ['./city-cresult.component.css']
})
export class CityCresultComponent {

  candidateVotes: any = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []

  constructor(private candidateDataService: AppDataService, private countryDataService: CityCService) { }

  ngOnInit() {
    this.candidateList = this.candidateDataService.GetCandidatesList();
    this.countryList = this.candidateDataService.GetCountryPositionsList();
    this.cityList = this.candidateDataService.GetCityPositionsList();
    this.positionList = this.candidateDataService.GetPositionsList();
    this.candidateVotes = this.countryDataService.GetCandidateVotes();
  }

  ngDoCheck() {
    if (this.candidateVotes.length) {
      this.candidateVotes = this.candidateVotes
    }
  }
}
