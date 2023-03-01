import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent {
  candidateForm: FormGroup | any;


  candidatesList: any[] = [];
  postionList: any[] = [];
  cityList: any[] = [];
  countryList: any[] = [];
  selectedCityStatus: string = '';
  selectedCountryStatus: string = '';

  constructor(private candidateService: AppDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.candidatesList = this.candidateService.GetCandidatesList();
    this.postionList = this.candidateService.GetPositionsList();
    this.countryList = this.candidateService.GetCountryPositionsList();
    this.cityList = this.candidateService.GetCityPositionsList();

    console.log(this.candidatesList);
    console.log(this.postionList);
    console.log(this.countryList);
    console.log(this.cityList);


    this.candidateForm = new FormGroup({
      name: new FormControl(''),
      cname: new FormControl(''),
      cityPosition: new FormControl(''),
      countryPosition: new FormControl(''),
      cityStatus: new FormControl(''),
      countryStatus: new FormControl(''),

    })
  }

  get g() {
    return this.candidateForm.controls;
  }
  ReturnName(array: any, id: any): string {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id == id) {
        return array[i].name;
      }
    }
    return "Nothing found"
  }
  AddCandidate() {
    console.log(this.candidatesList[(this.candidatesList.length) - 1].id);

    let id: number = this.candidatesList[(this.candidatesList.length) - 1].id + 1;
    let positionId: number = this.postionList[(this.postionList.length) - 1].id + 1;
    // let cityId: number = this.candidatesList[-1].cityId + 1;
    // let countryId: number = this.candidatesList[-1].countryId + 1;

    let nameCandidate: string = this.g.name.value;
    let cname: string = this.g.cname.value;
    // if (nameCandidate == '' || cname == '' || cname != "CityA" || cname != "CityB") {
    if (nameCandidate == '' || cname == '' || (cname != "CityA" && cname != "CityB" && cname != "CityC")) {
      // Handle error

      alert('Wrong iNput')
      return
    }

    let cityStatus = this.g.cityStatus.value;
    let countryStatus = this.g.countryStatus.value;
    let cityPositionId = parseInt(this.g.cityPosition.value);
    let countryPositionId = parseInt(this.g.countryPosition.value);
    let cityName = this.ReturnName(this.cityList, cityPositionId);
    let countryName = this.ReturnName(this.countryList, countryPositionId);
    console.log(
      "name:", nameCandidate,
      "city:", cname,
      "status:", cityStatus,
      "status:", countryStatus,
      "Id", cityPositionId,
      "Id", countryPositionId,
      "CityName", cityName,
      "CityName", countryName
    );
    if (Number.isNaN(cityPositionId)) {
      console.log("Catach");
      cityPositionId = -1
      cityName = "N/A"
      cityStatus = "N/A"
    }
    if (Number.isNaN(countryPositionId)) {
      countryPositionId = -1
      countryName = "N/A"
      countryStatus = "N/A"

    }

    const candidateObj = { id: id, name: nameCandidate, cityname: cname, positionId: positionId }
    const positionObj = { id: positionId, cityId: cityPositionId, countryId: countryPositionId }
    const cityPositionObj = { id: cityPositionId, name: cityName, status: cityStatus }
    const countryPositionObj = { id: countryPositionId, name: countryName, status: countryStatus }
    this.candidateService.AddCandidate(candidateObj, positionObj, cityPositionObj, countryPositionObj)
  }

}
