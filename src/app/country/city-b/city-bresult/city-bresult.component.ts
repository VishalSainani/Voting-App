import { Component } from '@angular/core';
import { AppDataService } from 'src/app/app-data.service';
import { CityBService } from '../city-b.service';

@Component({
  selector: 'app-city-bresult',
  templateUrl: './city-bresult.component.html',
  styleUrls: ['./city-bresult.component.css']
})
export class CityBResultComponent {

  candidateVotes: any = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []

  constructor(private candidateDataService: AppDataService, private countryDataService: CityBService) { }

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
