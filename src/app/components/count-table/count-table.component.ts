import { count } from 'rxjs/operators';
import { ICountry } from './../../services/master-data.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'covid-count-table',
  templateUrl: './count-table.component.html',
  styleUrls: ['./count-table.component.scss'],
})
export class CountTableComponent implements OnInit, OnChanges {

  @Input()
  public countries;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  yAxisLabel = 'Countries';
  showYAxisLabel = false;
  xAxisLabel = 'Normalized Population';

  view: any[] = [window.innerWidth - 100, 300];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {}

}
