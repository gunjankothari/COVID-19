import { MasterDataService, ICountry } from './../services/master-data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/internal/operators/finalize';

const GLOBAL_DATA_KEY = 'All';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  countries$: Observable<ICountry[]>;
  rowData: ICountry[];
  countriesCaseData: any = null;
  globalData: ICountry;
  totalGlobalCases: number;
  countUpOptions: { [key: string]: string | boolean | number }
  constructor(
    private masterData: MasterDataService
  ) {}

  ionViewWillEnter() {
    this.fetchData();
    this.countUpOptions = {
      duration: 1,
    };
  }

  doRefresh(event) {
    this.fetchData(() => {
      event.target.complete();
    });
  }

  fetchData(cb?: () => void) {
    this.masterData.getData()
      .pipe(
        finalize(() => {
          if (cb) { cb(); }
        })
      ).subscribe((countries: ICountry[]) => {
        this.rowData = countries;
        this.countriesCaseData = countries.map(countryObj => ({
          name: countryObj.country,
          value: countryObj.total_cases
        }))
        .filter( country => country.name !== GLOBAL_DATA_KEY)
        .splice(0, 10);

        this.globalData = this.getGlobalData(countries);
      },
      error => {
        console.error('Error While Fetching data');
      });
  }

  getGlobalData(data): ICountry {
    return data.find( countryObj => countryObj.country === GLOBAL_DATA_KEY);
  }

}
