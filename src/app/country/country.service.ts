import { Injectable } from '@angular/core';
import { AppDataService } from '../app-data.service';
export interface Vote {
  id: number,
  vote: number,
}
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  candidateVotes: Vote[] = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []
  closeVotes: boolean = true;

  constructor(private candidateDataService: AppDataService) { }

  ngOnInit() {
    this.candidateList = this.candidateDataService.GetCandidatesList();
    this.countryList = this.candidateDataService.GetPositionsList();
    this.cityList = this.candidateDataService.GetCountryPositionsList();
    this.positionList = this.candidateDataService.GetCityPositionsList();
  }

  GetCandidateVotes() {
    return this.candidateVotes;
  }

  AddVote(data: any) {
    this.candidateVotes.push(data)
  }
  UpdateVote(data: any) {
    this.candidateVotes = data
    console.log(this.candidateVotes);
    this.closeVotes = false;

  }


}
