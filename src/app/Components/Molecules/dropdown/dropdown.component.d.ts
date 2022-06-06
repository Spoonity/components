import { AfterViewInit, ElementRef, EventEmitter, QueryList, Renderer2 } from '@angular/core';
import { FormFieldManager } from '../../shared/form-field.manager';
import { OverlayTemplateComponent } from '../../shared/overlay-template/overlay-template.component';
import { OptionComponent } from './option/option.component';
import { DropdownService } from './dropdown.service';
export declare class DropdownComponent extends FormFieldManager implements AfterViewInit {
    private _dropdownService;
    selectMultiple: boolean;
    dropdownChange: EventEmitter<any>;
    input: ElementRef;
    dropdown: OverlayTemplateComponent;
    options: QueryList<OptionComponent>;
    single_selectedOption: OptionComponent;
    single_selected: any;
    multiple_selectedOptions: OptionComponent[];
    multiple_selected: any[];
    private keyManager;
    constructor(_dropdownService: DropdownService, _renderer: Renderer2);
    ngAfterViewInit(): void;
    private _initializeValueOnMultiple;
    private _initializeValueOnSingle;
    /**
     *  override: inherited writeValue
     *  called on form control setValue and form initialize
     */
    writeValue(obj: any): void;
    /**
     * show dropdown action
     */
    showDropdown(): void;
    /**
     * hide dropdown action
     */
    hideDropdown(): void;
    /**
     * action when clicking the chevron icon (on the right)
     * @param event
     */
    onDropMenuIconClick(event: UIEvent): void;
    /**
     * select option
     * @param option
     */
    selectOption(option: OptionComponent): void;
    /**
     * keydown event (applies only to single selection items)
     * @param event
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * on change action
     */
    changeAction_($event: any): void;
}
