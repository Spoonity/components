import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class RangeCalendarComponent implements OnInit, OnChanges {
    startDate: Date;
    endDate: Date;
    min: Date;
    max: Date;
    onChange: EventEmitter<Date[]>;
    /** date range **/
    range: Date[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    disabledDate: (current: Date) => boolean;
}
