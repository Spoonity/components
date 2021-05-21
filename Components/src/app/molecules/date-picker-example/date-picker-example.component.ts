import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spt-date-picker-example',
  templateUrl: './date-picker-example.component.html'
})
export class DatePickerExampleComponent implements OnInit {

  constructor() { }

  date: Date;
  date2: Date;

  ngOnInit(): void {
    this.date = new Date(1619893226000);
  }

}
