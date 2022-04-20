import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class RangeCalendarComponent implements OnInit, OnChanges {
    /** range start date **/
    startDate: Date;
    /** range end date **/
    endDate: Date;
    onChange: EventEmitter<Date[]>;
    /** date range **/
    range: Date[];
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
