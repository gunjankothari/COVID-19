import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'covid-matric-card',
  templateUrl: './matric-card.component.html',
  styleUrls: ['./matric-card.component.scss'],
})
export class MatricCardComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  value: number;

  @Input()
  subValue: number;

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {}

}
