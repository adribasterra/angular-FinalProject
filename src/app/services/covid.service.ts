import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CovidBasicData } from '../models/covid-basic-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  getTotals(): Observable<CovidBasicData[]> {
    const URL: string = 'https://covid-19-data.p.rapidapi.com/totals';

    return this.http.get(URL, { headers: this.buildRapidApiHeaders() }).pipe(
      map((data: [any]) => {
        return data.map((item: JSON) => {
          return new CovidBasicData(item);
        });
      })
    );
  }

  private buildRapidApiHeaders(): HttpHeaders {
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set(
      'x-rapidapi-key',
      '376fe887b4msh03d31a8a79543c0p1cc498jsnc6803f649a46'
    );
    httpHeaders = httpHeaders.set('useQueryString', 'true');
    return httpHeaders;
  }
}
