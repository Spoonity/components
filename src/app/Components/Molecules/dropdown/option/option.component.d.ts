import { OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownComponent } from '../dropdown.component';
export declare class OptionComponent implements OnInit {
    private _dropdownService;
    value: any;
    text: string;
    disabled: boolean;
    get selected(): boolean;
    active: boolean;
    checkboxModel: boolean;
    select: DropdownComponent;
    onClick(event: UIEvent): void;
    constructor(_dropdownService: DropdownService);
    ngOnInit(): void;
    /**
     * get option label
     */
    getLabel(): string;
    /**
     * set active status
     */
    setActiveStyles(): void;
    /**
     * set inactive status
     */
    setInactiveStyles(): void;
    /**
     * select option item
     */
    selectItem(): void;
}
