import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spt-date-picker-example',
  templateUrl: './date-picker-example.component.html',
  styleUrls: ['../text-field-example/text-field-example.component.less']
})
export class DatePickerExampleComponent implements OnInit {

  constructor() { }

  date: Date;
  date2: Date;
  date3: Date;

  rangeStart: Date = new Date();
  rangeEnd: Date = new Date();

  minDate: Date;
  maxDate: Date;

  ngOnInit(): void {
    this.date = new Date(1619893226000);
    this.minDate = new Date(1622754813000);
    this.maxDate = new Date(1624914813000);
  }

  rangeChanged(range: Date[]): void {
    try {
      this.rangeStart = range[0];
      this.rangeEnd = range[1];
    } catch {

    }
  }
}
