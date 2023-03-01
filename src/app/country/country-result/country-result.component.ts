import { Component } from '@angular/core';
import { AppDataService } from 'src/app/app-data.service';
import { CityAService } from '../city-a/city-a.service';
import { CityBService } from '../city-b/city-b.service';
import { CityCService } from '../city-c/city-c.service';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-result',
  templateUrl: './country-result.component.html',
  styleUrls: ['./country-result.component.css']
})
export class CountryResultComponent {

  candidateVotes: any = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []
  candidateVotesA: any = []
  candidateVotesB: any = []
  candidateVotesC: any = []


  constructor(private candidateDataService: AppDataService,
    private countryDataService: CountryService,
    private cityADataService: CityAService,
    private cityBDataService: CityBService,
    private cityCDataService: CityCService,

  ) { }

  ngOnInit() {
    this.candidateList = this.candidateDataService.GetCandidatesList();
    this.countryList = this.candidateDataService.GetCountryPositionsList();
    this.cityList = this.candidateDataService.GetCityPositionsList();
    this.positionList = this.candidateDataService.GetPositionsList();
    this.candidateVotes = this.countryDataService.GetCandidateVotes();
    this.candidateVotesA = this.cityADataService.GetCandidateVotes();
    this.candidateVotesB = this.cityBDataService.GetCandidateVotes();
    this.candidateVotesC = this.cityCDataService.GetCandidateVotes();

  }

  ngDoCheck() {
    if (this.candidateVotes.length) {
      this.candidateVotes = this.candidateVotes
    }
  }
}
