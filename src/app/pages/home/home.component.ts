import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';
import * as CanvasJS from 'canvasjs/dist/canvasjs.min';
import { NgxPaginationModule } from 'ngx-pagination';
// import * as CanvasJS from 'src/assets/scripts/canvasjs/dist/canvasjs.min';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  public IndiaData:any;
  public totaldata:any;
  public isloading:any;
  // GlobalDataList:any;
  // loaded:boolean=false;
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
      // this.GlobalDataList={
      //   f:"a",
      //   usage:"some",
      //   data:{a:"one",b:"two",c:"three"},
      // };
      // this.loaded=true;


      // let chart = new CanvasJS.Chart("chartContainer", {
        // animationEnabled: true,
      //   exportEnabled: true,
      //   title: {
      //     text: "Basic Column Chart in Angular"
      //   },
      //   data: [{
      //     type: "column",
      //     dataPoints: [
      //       { y: this.totaldata.confirmed, label: "Active" },
      //       { y: this.totaldata.confirmed, label: "Recovered" },
      //       { y: this.totaldata.confirmed, label: "Deaths" },
      //     ]
      //   }]
      // });
        
      // chart.render();
  

 

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
    
    
  

