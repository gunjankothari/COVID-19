import { MasterDataService, ICountry } from './../services/master-data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries$: Observable<ICountry[]>;
  countriesCaseData: any = null;

  constructor(
    private masterData: MasterDataService
  ) {}

  ionViewWillEnter() {
    this.fetchData();
  }

  doRefresh(event) {
    this.fetchData(() => {
      event.target.complete();
    });
  }

  fetchData(cb?: () => void) {
    this.countriesCaseData = null;
    this.masterData.getData()
      .pipe(
        finalize(() => {
          // tslint:disable-next-line: no-unused-expression
          cb && cb();
        })
      ).subscribe((countries: ICountry[]) => {
        this.countriesCaseData = countries.map(countryObj => ({
          name: countryObj.country,
          value: countryObj.total_cases
        }))
        .filter( country => country.name !== 'All')
        .splice(0, 10);
      },
      error => {
        console.error('Error While Fetching data')
      });
  }

}
