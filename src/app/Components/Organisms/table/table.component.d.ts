import { OnInit } from '@angular/core';
export interface IDataSet {
    number: number;
    date: string;
    description: string;
    amount: string;
    status: boolean;
    invoice: string;
}
export declare class TableComponent implements OnInit {
    checkboxOn: boolean;
    rows: any[];
    dataSet: any[];
    pageSize: number;
    totalData: number;
    constructor();
    ngOnInit(): void;
}
