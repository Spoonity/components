import {
  AfterViewInit,
  Component, ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import {FormFieldManager} from '../shared/form-field.manager';
import {DropdownTemplateComponent} from '../dropdown/dropdown-template/dropdown-template.component';
import {SearchService} from './search.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SearchOptionComponent} from './search-option/search-option.component';
import {ActiveDescendantKeyManager} from '@angular/cdk/a11y';


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
export class SearchComponent extends FormFieldManager implements OnInit, AfterViewInit {

  @Input() placeholder;
  @Input() selectedItems: {id: string; icon: string; text: string}[] = [];
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  public selected: SearchOptionComponent;

  focus: boolean;

  @ContentChildren(SearchOptionComponent)
  options: QueryList<SearchOptionComponent>;

  /* key manager */
  private keyManager: ActiveDescendantKeyManager<SearchOptionComponent>;


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

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.keyManager = new ActiveDescendantKeyManager(this.options)
        .withHorizontalOrientation('ltr')
        .withVerticalOrientation()
        .withWrap();
      this.checkDirty();
    }, 100);
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
    } else if (['ArrowUp', 'Up', 'ArrowDown', 'Down', 'ArrowRight', 'Right', 'ArrowLeft', 'Left']
      .indexOf(event.key) > -1) {
      this.keyManager.onKeydown(event);
    } else if (event.key === 'PageUp' || event.key === 'PageDown' || event.key === 'Tab') {
      if (this.search.showing) {
        event.preventDefault();
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

  public onClose(item: any) {
    // TODO:
  }
}
