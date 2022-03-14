import { OnInit } from '@angular/core';
export declare class ChartComponent implements OnInit {
    options: {};
    data: any[];
    labels: any[];
    type: ChartType;
    constructor();
    ngOnInit(): void;
}
export declare enum ChartType {
    pie = "pie",
    doughnut = "doughnut",
    bar = "bar",
    line = "line",
    polarArea = "polarArea",
    radar = "radar",
    horizontalBar = "horizontalBar"
}
export interface IChart {
    data: Array<IData>;
    labels: Array<string>;
}
export interface IData {
    data: number;
    label: string;
}
