import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'spt-range-calendar',
  templateUrl: './range-calendar.component.html',
  styleUrls: ['../../shared/form-field.manager.less']
})
export class RangeCalendarComponent implements OnInit, OnChanges {
  /** range start date **/
  @Input() startDate: Date = new Date();

  /** range end date **/
  @Input() endDate: Date = new Date();

  @Output() onChange: EventEmitter<Date[]> = new EventEmitter<Date[]>();

  /** date range **/
  range: Date[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.startDate || changes.endDate) {
      this.range = [this.startDate, this.endDate];
    }
  }
}
