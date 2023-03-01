import { Injectable } from '@angular/core';

export interface Candidate {
  id: number;
  name: string;
  cityname: string;
  positionId: number
}

export interface Position {
  id: number
  cityId: number
  countryId: number
}

export interface CountryPositon {
  id: number
  name: string
  status: string
}

export interface CityPositon {
  id: number
  name: string
  status: string
}

@Injectable({
  providedIn: 'root'
})

export class AppDataService {

  candidates: Candidate[] = [
    { id: 1, name: "John Doe", cityname: "CityA", positionId: 1 },
    { id: 2, name: "Jane Doe", cityname: "CityB", positionId: 2 },
    { id: 3, name: "Easy Doe", cityname: "CityC", positionId: 3 },
  
  ]
  positions: Position[] = [
    { id: 1, countryId: 1, cityId: 1 },
    { id: 2, countryId: 2, cityId: 2 },
    { id: 3, countryId: 1, cityId: 2 },


  ]

  cityPositions: CityPositon[] = [
    { id: -1, name: 'N/A', status: 'N/A' },
    { id: 1, name: 'Mayor', status: 'open' },
    { id: 2, name: 'Magistrate', status: 'open' },

  ]

  countryPositions: CountryPositon[] = [
    { id: -1, name: 'N/A', status: 'N/A' },
    { id: 1, name: 'President', status: 'open' },
    { id: 2, name: 'Vice President', status: 'open' },

  ]
  cities = ['CityA', 'CityB', 'CityC'];
  constructor() { }

  GetCandidatesList() {

    return this.candidates;
  }
  GetPositionsList() {
    return this.positions;
  }
  GetCityPositionsList() {
    return this.cityPositions;
  }
  GetCountryPositionsList() {
    return this.countryPositions;
  }

  AddCandidate(candidateData: any, positionData: any, cityData: any, countryData: any) {
    console.log("l", candidateData);
    // console.log(positionData);
    // console.log(cityData);
    // console.log(countryData);


    this.candidates.push(candidateData);
    this.positions.push(positionData)
    console.log(this.candidates);

    // this.cityPositions.push(cityData)
    // this.countryPositions.push(countryData);
  }

  DeleteCandidate(id: number) {

    const obj = this.candidates[id].positionId
    console.log("sa", obj, id);

    this.positions = this.positions.filter(data => data.id != obj);

    this.candidates = this.candidates.filter(data => data.id != id);
  }
  DeleteCity(id: number) {
    this.cityPositions = this.cityPositions.filter(data => data.id != id);

  }
  DeleteCountry(id: number) {
    this.countryPositions = this.countryPositions.filter(data => data.id != id);
  }
  AddCity(data: any) {
    this.cityPositions.push(data);
  }
  AddCountry(data: any) {
    this.countryPositions.push(data);
  }
}
