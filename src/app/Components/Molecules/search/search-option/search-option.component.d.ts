import { OnInit } from '@angular/core';
import { SearchService } from '../search.service';
export declare class SearchOptionComponent implements OnInit {
    private _searchService;
    value: any;
    private search;
    get selected(): boolean;
    active: boolean;
    onClick(event: UIEvent): void;
    constructor(_searchService: SearchService);
    ngOnInit(): void;
    /**
     * set active status
     */
    setActiveStyles(): void;
    /**
     * set inactive status
     */
    setInactiveStyles(): void;
}
