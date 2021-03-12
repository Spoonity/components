import {Component, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormFieldManager} from '../shared/form-field.manager';
import {DropdownTemplateComponent} from '../dropdown/dropdown-template/dropdown-template.component';
import {SearchService} from './search.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SearchOptionComponent} from './search-option/search-option.component';

interface IOption {
  id: any;
  value: any;
  text: string;
  icon?: string;
}

export interface ISelectedItem {
  id: any;
  icon: string;
  text: string;
}


@Component({
  selector: 'sp-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less', '../shared/form-field.manager.less'],
  providers: [
    SearchService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true
    }
  ]
})
export class SearchComponent extends FormFieldManager implements OnInit {

  @Input() placeholder;
  @Input() selectedItems = [];
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  public selected: SearchOptionComponent;

  constructor(
    private _searchService: SearchService
  ) {
    super();
    this._searchService.register(this);
  }

  @ViewChild(DropdownTemplateComponent, {static: false})
  public search: DropdownTemplateComponent;

  ngOnInit() {
  }

  /**
   * override: on change action
   */
  changeAction($event) {
    console.log($event);
    this.onChange($event);
    this.checkDirty();

    if (this.value.length > 0) {
      if (!this.search.showing) {
        this.showDropdown();
      }
      this.filterAction();
    } else {
      this.hideDropdown();
    }
  }

  /**
   * show options action
   */
  public showDropdown(): void {
    this.search.show();

    // TODO:
  }

  /**
   * hide dropdown action
   */
  public hideDropdown(): void {
    this.search.hide();
  }

  /**
   * keydown event (applies only to single selection items)
   * @param event
   */
  public onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.hideDropdown();
      this.onChange();
      this.checkDirty();
    } else if (event.key === 'Escape' || event.key === 'Esc') {
      if (this.search.showing) {
        this.hideDropdown();
      }
    }
  }

  public select(selection: any) {
    console.log('select', selection);
    this.itemSelected.emit(selection);
    // TODO:
    this.hideDropdown();
  }

  public filterAction() {
    this.filter.emit();
  }
}
