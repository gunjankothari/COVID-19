import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Sorting = 'new_cases' | 'active_cases' | 'critical_cases' | 'recovered_cases' | 'total_cases' | 'total_deaths' | 'new_deaths';

export interface ICountry {
  country: string;
  new_cases: number;
  active_cases: number;
  critical_cases: number;
  recovered_cases: number;
  total_cases: number;
  total_deaths: number;
  new_deaths: number;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {

  constructor(
    private readonly http: HttpClient,
  ) {}

  getData() {
    const URL = 'https://covid-193.p.rapidapi.com/statistics';
    const headers = new HttpHeaders()
      .set('x-rapidapi-host', 'covid-193.p.rapidapi.com')
      .set('x-rapidapi-key', '4XJCwuDc3rmshSTR6uWFISv7jCdtp1aaleCjsnEwRftGGfnZg6');

    return this.http.get(URL, { headers })
      .pipe(
        // tslint:disable-next-line: no-string-literal
        map( res => res['response'] ),
        map(this.formatRapidAPIData),
        map(countries => this.sort(countries))
      );
  }

  formatRapidAPIData(data) {
    return data.map( country => {
      return {
        country: country.country,
        new_cases: +country.cases.new,
        active_cases: country.cases.active,
        critical_cases: country.cases.critical,
        recovered_cases: country.cases.recovered,
        total_cases: country.cases.total,
        total_deaths: country.deaths.total,
        new_deaths: +country.deaths.new,
        date: country.day,
      };
    });
  }

  sort(countries, sortBy: Sorting = 'total_cases', order: boolean = true) {
    if (order) {
      return countries.sort( (countryA, countryB) => countryB[sortBy] - countryA[sortBy] );
    }
    return countries.sort( (countryA, countryB) => countryA[sortBy] - countryB[sortBy] );
  }

}
