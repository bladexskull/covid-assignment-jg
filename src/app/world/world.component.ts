import { Component, OnInit } from '@angular/core';
import{ CovidService } from 'src/app/services/covid.service';
// import { CovidService } from 'src/app/services/covid.service';

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
  }

}
