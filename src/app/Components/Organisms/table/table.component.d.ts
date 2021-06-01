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
    rows: [];
    dataSet: IDataSet[];
    totalData: number;
    constructor();
    ngOnInit(): void;
}
