import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CovidCountryData } from '../models/covid-country-data';
import { CovidService } from '../services/covid.service';

@Injectable({
  providedIn: 'root'
})
export class CountryResolverService implements Resolve<CovidCountryData[]> {

  constructor(private covidService: CovidService) { }

  resolve(): Observable<CovidCountryData[]> {
    return this.covidService.getCountriesData();
  }
}
