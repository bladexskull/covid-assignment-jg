import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public IndiaData:any;
  public totaldata:any;
  public isloading:any;
  constructor(private covidserviceobj : CovidService) { }
  homecomponentcalled:boolean=false;
  ngOnInit(): void {
    
    this.covidserviceobj.getIndiaData().subscribe((data)=>{
      this.covidserviceobj.IndStateData=data["India"];
      this.covidserviceobj.totalIndiaData=data["India"]["All"];
      this.totaldata=data["India"]["All"];
      this.IndiaData=data["India"];
      console.log(this.covidserviceobj.IndStateData);
      console.log(this.covidserviceobj.totalIndiaData);
      this.covidserviceobj.worlddata=data;
    });

    this.covidserviceobj.getIndiaStateData().subscribe(data=>{
      this.covidserviceobj.JKData=data['Jammu and Kashmir']['districtData'];
      console.log(data);
    });
      // this.IndiaData=this.covidserviceobj.IndStateData;
      // this.totaldata=this.covidserviceobj.totalIndiaData;
      console.log(this.totaldata);
      // this.homecomponentcalled=true;
      console.log(this.IndiaData);
  };
    // if(this.homecomponentcalled){
    //   this.isloading=true;
    //   this.IndiaData=this.covidService.IndData;
    // };

  }

  // cons(){
  //   let data=this.covidService.getIndiaData().subscribe(data=>{
  //     data=data["India"];
  //   console.log(data);
  //   });
    
    
  

