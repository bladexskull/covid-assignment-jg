import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  stateurl='https://api.covid19india.org/state_district_wise.json';
  url="https://covid-api.mmediagroup.fr/v1/cases";
  getIndiaData(){
    return this.http.get(this.url);
  }

  getIndiaStateData(){
    return this.http.get(this.stateurl);
  }

  cons(){
    let data=this.getIndiaData();
    data=data["India"];
    console.log(data);
    
  }
  IndStateData:any;
  worlddata:any;
  totalIndiaData:any;
  JKData:any;
}
