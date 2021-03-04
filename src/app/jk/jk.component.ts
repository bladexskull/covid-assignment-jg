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
    this.covidService.getIndiaStateData().subscribe(data=>{
      this.JKdata=data["Jammu and Kashmir"]["districtData"];
      console.log(this.JKdata);
      this.jktotal=this.covidService.IndData["Jammu and Kashmir"];
    });
  }

}
