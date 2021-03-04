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
  constructor(private covidService : CovidService) { }
  homecomponentcalled:boolean=false;
  ngOnInit(): void {
    this.covidService.getIndiaData().subscribe((data)=>{
      this.IndiaData=data["India"];
      this.covidService.IndData=data["India"];
      this.totaldata=data["India"]["All"];
      console.log(this.totaldata);
      this.homecomponentcalled=true;
      // console.log(this.covidService.IndData);
      console.log(this.IndiaData);
      
    });
    if(this.homecomponentcalled){
      this.isloading=true;
      this.IndiaData=this.covidService.IndData;
    }

  }

  // cons(){
  //   let data=this.covidService.getIndiaData().subscribe(data=>{
  //     data=data["India"];
  //   console.log(data);
  //   });
    
    
  }

