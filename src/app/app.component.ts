import { Component } from '@angular/core';
import {CovidService} from 'src/app/services/covid.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid19-online';
  constructor(public covidserviceobj:CovidService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log("Am initialized");
    this.covidserviceobj.getIndiaData().subscribe((data)=>{
      this.covidserviceobj.IndStateData=data["India"];
      this.covidserviceobj.totalIndiaData=data["India"]["All"];
      console.log(this.covidserviceobj.IndStateData);
      console.log(this.covidserviceobj.totalIndiaData);
      this.covidserviceobj.worlddata=data;
    });

    this.covidserviceobj.getIndiaStateData().subscribe(data=>{
      this.covidserviceobj.JKData=data;
    });

  }

}
