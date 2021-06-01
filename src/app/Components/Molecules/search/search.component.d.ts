import { AfterViewInit, EventEmitter, QueryList } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { SearchService } from './search.service';
import { SearchOptionComponent } from './search-option/search-option.component';
export declare class SearchComponent extends FormFieldManager implements AfterViewInit {
    private _searchService;
    placeholder: any;
    selectedItems: {
        id: string;
        icon: string;
        text: string;
    }[];
    maximumSelection?: number;
    filter: EventEmitter<any>;
    itemSelected: EventEmitter<any>;
    itemRemoved: EventEmitter<any>;
    search: OverlayTemplateComponent;
    options: QueryList<SearchOptionComponent>;
    selected: SearchOptionComponent;
    focus: boolean;
    constructor(_searchService: SearchService);
    ngAfterViewInit(): void;
    /**
     * override: on change action
     */
    changeAction($event: any): void;
    /**
     * show options action
     */
    showDropdown(): void;
    /**
     * hide dropdown action
     */
    hideDropdown(): void;
    /**
     * keydown event
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * on select item
     */
    select(selection: any): void;
    /**
     * on filter action
     */
    filterAction(): void;
    /**
     * on close item
     */
    onClose(selection: any): void;
}
