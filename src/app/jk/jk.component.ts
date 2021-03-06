import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-jk',
  templateUrl: './jk.component.html',
  styleUrls: ['./jk.component.css']
})


export class JKComponent implements OnInit {

  constructor(private covidService : CovidService) { }
  JKdata:any;
  jktotal:any;
  ngOnInit(): void {
   this.JKdata=this.covidService.JKData;
   this.jktotal=this.covidService.IndStateData['Jammu and Kashmir'];
   console.log(this.JKdata);
  }

}
