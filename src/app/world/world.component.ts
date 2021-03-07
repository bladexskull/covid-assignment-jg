import { Component, OnInit } from '@angular/core';
import{ CovidService } from 'src/app/services/covid.service';
// import { CovidService } from 'src/app/services/covid.service';
// import {CanvasJS} from CanvasJS;
import * as CanvasJS from 'canvasjs/dist/canvasjs.min';


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  constructor(public covidserviceobj:CovidService) { }
  worlddata:any;
  ngOnInit(): void {
    this.worlddata=this.covidserviceobj.worlddata;

    let chart = new CanvasJS.Chart("chartContainer", {
      // animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 2, label: "Active" },
          { y: 3, label: "Recovered" },
          { y: 4, label: "Deaths" },
        ]
      }]
    });
      
    // chart.render();


  }

}
