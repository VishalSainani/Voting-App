import { Component } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css']
})
export class PositionComponent {
  postionList: any[] = [];
  cityList: any[] = [];
  countryList: any[] = [];
  poistionForm: FormGroup | any;


  constructor(private positionOperations: AppDataService) { }
  ngOnInit() {
    this.postionList = this.positionOperations.GetPositionsList();
    this.countryList = this.positionOperations.GetCountryPositionsList();
    this.cityList = this.positionOperations.GetCityPositionsList();

    this.poistionForm = new FormGroup({
      cityPosition: new FormControl(''),
      cityStatus: new FormControl(''),
      countryPosition: new FormControl(''),
      countryStatus: new FormControl(''),
    })

  }
  DeleteCity(id: number) {
    this.positionOperations.DeleteCity(id)
  }
  DeleteCountry(id: number) {
    this.positionOperations.DeleteCountry(id)

  }
  ngDoCheck() {
    if (this.cityList.length || this.countryList.length) {
      this.countryList = this.positionOperations.GetCountryPositionsList();
      this.cityList = this.positionOperations.GetCityPositionsList();
    }
  }
  get g() {
    return this.poistionForm.controls;
  }

  AddCity() {
    let cityPosition = this.g.cityPosition.value
    let cityStatus = this.g.cityStatus.value;
    let id = this.cityList[this.cityList.length - 1].id + 1
    // console.log(
    //   cityPosition,
    //   cityStatus,
    // )
    this.positionOperations.AddCity({ id: id, name: cityPosition, status: cityStatus })

  }
  AddCountry() {
    let countryPosition = this.g.countryPosition.value;
    let countryStatus = this.g.countryStatus.value;
    let id = this.countryList[this.countryList.length - 1].id + 1

    // console.log(
    //   countryPosition,
    //   countryStatus,);
    this.positionOperations.AddCountry({ id: id, name: countryPosition, status: countryStatus })

  }
}
