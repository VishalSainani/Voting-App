import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  candidatesList: any[] = [];
  postionList: any[] = [];
  cityList: any[] = [];
  countryList: any[] = [];

  constructor(private candidateService: AppDataService, private router: Router) { }
  ngOnInit() {
    this.candidatesList = this.candidateService.GetCandidatesList();
    this.postionList = this.candidateService.GetPositionsList();
    this.countryList = this.candidateService.GetCountryPositionsList();
    this.cityList = this.candidateService.GetCityPositionsList();
    console.log("List", this.candidatesList);

  }

  ngDoCheck() {
    if (this.candidatesList.length) {
      console.log("Check", this.candidatesList);

      this.candidatesList = this.candidateService.GetCandidatesList();
    }
  }

  DeleteClicked(id: number) {
    // this.router.navigate(['/delete-candidate', id]);
    console.log(id);

    this.candidateService.DeleteCandidate(id)

  }


}
