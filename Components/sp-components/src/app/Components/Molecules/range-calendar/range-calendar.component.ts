import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {differenceInCalendarDays} from 'date-fns';

@Component({
  selector: 'spt-range-calendar',
  templateUrl: './range-calendar.component.html',
  styleUrls: ['../../shared/form-field.manager.less']
})
export class RangeCalendarComponent implements OnInit, OnChanges {
  /* range start date */
  @Input() startDate: Date = new Date();

  /* range end date */
  @Input() endDate: Date = new Date();

  @Input() min: Date;

  @Input() max: Date;

  /* on change event */
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

  disabledDate = (current: Date): boolean => {
    if (this.min && this.max == null) {
      return differenceInCalendarDays(current, this.min) < 0;
    }

    if (this.max && this.min == null) {
      return differenceInCalendarDays(current, this.max) > 0;
    }

    if (this.min && this.max) {
      return differenceInCalendarDays(current, this.min) < 0 || differenceInCalendarDays(current, this.max) > 0;
    }

    return null;
  }
}
