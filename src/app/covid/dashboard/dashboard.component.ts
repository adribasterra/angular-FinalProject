import { Component, OnInit } from '@angular/core';
import { CovidBasicData } from 'src/app/models/covid-basic-data';
import { CovidService } from '../../services/covid.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  covidItem: CovidBasicData; //The service returns an array of CovidBasicData with just one element

  constructor( private covidService: CovidService ) { }

  ngOnInit(): void {
    this.covidService.getTotals().subscribe( ( results: CovidBasicData[] ) => {
      this.covidItem = results[0];
      console.log(this.covidItem);
    });
  }

}
