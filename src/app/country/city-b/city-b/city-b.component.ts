import { Component } from '@angular/core';
import { AppDataService } from 'src/app/app-data.service';
import { CityBService } from '../city-b.service';

@Component({
  selector: 'app-city-b',
  templateUrl: './city-b.component.html',
  styleUrls: ['./city-b.component.css']
})
export class CityBComponent {

  candidateVotes: any = []
  candidateList: any = []
  countryList: any = []
  cityList: any = []
  positionList: any = []
  closeVotes: boolean = true;
  newList = []

  constructor(private candidateDataService: AppDataService, private countryDataService: CityBService) {
  }

  ngOnInit() {
    this.candidateList = this.candidateDataService.GetCandidatesList();
    this.countryList = this.candidateDataService.GetCountryPositionsList();
    this.cityList = this.candidateDataService.GetCityPositionsList();
    this.positionList = this.candidateDataService.GetPositionsList();
    this.candidateVotes = this.countryDataService.GetCandidateVotes();

    this.closeVotes = this.countryDataService.closeVotes;
  }

  CountVote(id: number) {
    // Check if the candidate exists in candidateVotes
    const candidateIndex = this.candidateVotes.findIndex((candidate: { id: number; }) => candidate.id === id);

    if (candidateIndex === -1) {
      // If the candidate doesn't exist, add them to the list with a vote of 1
      this.candidateVotes.push({ id: id, vote: 1 });
    } else {
      // If the candidate exists, increment their vote count by 1
      this.candidateVotes[candidateIndex].vote++;
    }
  }

  CloseVote() {
    this.closeVotes = false;
    this.countryDataService.UpdateVote(this.candidateVotes)
    this.countryDataService.closeVotes = false;
  }

}


