import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  forwardRef, Input,
  QueryList,
  ViewChild
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormFieldManager} from '../../shared/form-field.manager';
import {OverlayTemplateComponent} from '../../shared/overlay-template/overlay-template.component';
import {OptionComponent} from './option/option.component';
import {DropdownService} from './dropdown.service';
import {ActiveDescendantKeyManager} from '@angular/cdk/a11y';

@Component({
  selector: 'spt-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less', '../../shared/form-field.manager.less'],
  providers: [
    DropdownService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent extends FormFieldManager implements AfterViewInit {
  /* flag if multiple selection is allowed */
  @Input() selectMultiple: boolean;


  @ViewChild('input')
  public input: ElementRef;

  @ViewChild(OverlayTemplateComponent)
  public dropdown: OverlayTemplateComponent;

  @ContentChildren(OptionComponent)
  public options: QueryList<OptionComponent>;


  /* single selection: selected OptionComponent */
  public single_selectedOption: OptionComponent;

  /* single selection: selected option value */
  public single_selected: any;


  /* multiple selection: list of selected OptionComponent */
  public multiple_selectedOptions: OptionComponent[] = [];

  /* multiple selection: list of selected option values */
  public multiple_selected: any[] = [];

  /* key manager */
  private keyManager: ActiveDescendantKeyManager<OptionComponent>;

  constructor(
    private _dropdownService: DropdownService
  ) {
    super();
    this._dropdownService.register(this);
  }


  public ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.selectMultiple) {
        this.options.toArray().forEach((o: OptionComponent) => {
          if (this.multiple_selected.includes(o.value)) {
            this.selectOption(o);
          }
        });
        this.value = this.multiple_selectedOptions.length ?
          Array.from(this.multiple_selectedOptions, (o: OptionComponent) => o.text).join(', ')
          : '';
      } else {
        this.single_selectedOption = this.options.toArray().find(option => option.value === this.single_selected);
        this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
        this.keyManager = new ActiveDescendantKeyManager(this.options)
          .withHorizontalOrientation('ltr')
          .withVerticalOrientation()
          .withWrap();
      }
      this.checkDirty();
    }, 100);
  }

  /**
   *  override: inherited writeValue
   */
  writeValue(obj: any): void {
    if (obj !== undefined) {
      if (this.selectMultiple) {
        if (Array.isArray(obj)) {
          this.multiple_selected = obj;
        }
      } else {
        this.single_selected = obj;
      }
      this.checkDirty();
    }
  }

  /**
   * show dropdown action
   */
  public showDropdown(): void {
    this.dropdown.show();
    if (!this.options.length) {
      return;
    }

    // set highlighted item only for single selection
    // -- highlight selected item or first item
    if (!this.selectMultiple) {
      if (this.single_selected) {
        this.keyManager.setActiveItem(this.single_selectedOption);
      } else {
        this.keyManager.setFirstItemActive();
      }
    }
  }

  /**
   * hide dropdown action
   */
  public hideDropdown(): void {
    this.dropdown.hide();
  }


  /**
   * action when clicking the chevron icon (on the right)
   * @param event
   */
  public onDropMenuIconClick(event: UIEvent): void {
    event.stopPropagation();
    setTimeout(() => {
      this.input.nativeElement.focus();
      this.input.nativeElement.click();
    }, 10);
  }

  /**
   * select option
   * @param option
   */
  public selectOption(option: OptionComponent) {
    if (this.selectMultiple) {
      // already selected -- unselect item
      if (this.multiple_selectedOptions.find((o: OptionComponent) => o.value === option.value)) {
        this.multiple_selectedOptions = [...this.multiple_selectedOptions.filter((o: OptionComponent) => o.value !== option.value)];
        this.multiple_selected = [...this.multiple_selected.filter((s: string) => s !== option.value)];
        option.checkboxModel = false;
      } else {
        // not yet selected -- select item
        if (!this.multiple_selected.includes(option.value)) {
          this.multiple_selected.push(option.value);
        }
        this.multiple_selectedOptions.push(option);
        option.checkboxModel = true;
      }

      this.value = this.multiple_selectedOptions.length ?
        Array.from(this.multiple_selectedOptions, (o: OptionComponent) => o.text).join(', ')
        : '';
    } else {
      this.keyManager.setActiveItem(option);
      this.single_selected = option.value;
      this.single_selectedOption = option;
      this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
      this.hideDropdown();
      this.input.nativeElement.blur();
    }

    this.checkDirty();
    this.onChange(this.selectMultiple ? this.multiple_selected : option.value);
  }

  /**
   * keydown event (applies only to single selection items)
   * @param event
   */
  public onKeyDown(event: KeyboardEvent) {
    if (this.selectMultiple) {
      return;
    }

    if (['Enter', ' ', 'ArrowDown', 'Down', 'ArrowUp', 'Up'].indexOf(event.key) > -1) {
      if (!this.dropdown.showing) {
        this.showDropdown();
        return;
      }

      if (!this.options.length) {
        event.preventDefault();
        return;
      }
    }

    if (event.key === 'Enter' || event.key === ' ') {
      this.single_selectedOption = this.keyManager.activeItem;
      this.value = this.single_selectedOption ? this.single_selectedOption.text : '';
      this.hideDropdown();
      this.onChange();
      this.checkDirty();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      if (this.dropdown.showing) {
        this.hideDropdown();
      }
    } else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
      .indexOf(event.key) > -1) {
      this.keyManager.onKeydown(event);
    } else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
      if (this.dropdown.showing) {
        event.preventDefault();
      }
    }
  }
}
