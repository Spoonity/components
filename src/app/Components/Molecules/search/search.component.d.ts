import { AfterViewInit, EventEmitter, QueryList, Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { SearchService } from './search.service';
import { SearchOptionComponent } from './search-option/search-option.component';
export interface ISearchChip {
    id: string;
    text: string;
    icon?: string;
    color?: string;
    tooltip?: string;
}
export declare class SearchComponent extends FormFieldManager implements AfterViewInit {
    private _searchService;
    placeholder: any;
    selectedItems: ISearchChip[];
    maximumSelection?: number;
    launchOnFocus?: boolean;
    alwaysShowOverlay: boolean;
    hideSearchIcon: boolean;
    overlayHeight: number;
    filter: EventEmitter<any>;
    itemSelected: EventEmitter<any>;
    itemRemoved: EventEmitter<ISearchChip>;
    chipClicked: EventEmitter<ISearchChip>;
    search: OverlayTemplateComponent;
    options: QueryList<SearchOptionComponent>;
    selected: SearchOptionComponent;
    focus: boolean;
    constructor(_searchService: SearchService, _renderer: Renderer2);
    ngAfterViewInit(): void;
    /**
     * override: on change action
     */
    changeAction($event: any): void;
    /**
     * focus action
     */
    focusAction(): void;
    /**
     * blur action
     */
    blurAction(): void;
    /**
     * show options action
     */
    showDropdown(): void;
    /**
     * hide options action
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
     * @param selection
     */
    onClose(selection: ISearchChip): void;
    /**
     * chip item clicked
     * @param selection
     */
    onChipSelected(selection: ISearchChip): void;
}
