import { Component } from '@angular/core';
import { AppDataService } from 'src/app/app-data.service';
import { CityAService } from '../city-a.service';

@Component({
  selector: 'app-city-aresult',
  templateUrl: './city-aresult.component.html',
  styleUrls: ['./city-aresult.component.css']
})
export class CityAResultComponent {

  candidateVotes: any = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []

  constructor(private candidateDataService: AppDataService, private countryDataService: CityAService) { }

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
