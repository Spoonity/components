import {
  AfterViewInit,
  Component, ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  QueryList, Renderer2,
  ViewChild
} from '@angular/core';
import {FormFieldManager} from '../../shared/form-field.manager';
import {OverlayTemplateComponent} from '../../shared/overlay-template/overlay-template.component';
import {SearchService} from './search.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {SearchOptionComponent} from './search-option/search-option.component';


export interface ISearchChip {
  id: string;
  text: string;
  icon?: string;
  color?: string;
  tooltip?: string;
}

@Component({
  selector: 'spt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less', '../../shared/form-field.manager.less'],
  providers: [
    SearchService,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true
    }
  ]
})
export class SearchComponent extends FormFieldManager implements AfterViewInit {

  /* Placeholder text */
  @Input() placeholder;

  /* selected items (chips) */
  @Input() selectedItems: ISearchChip[] = [];

  /* optional maximum selected items */
  @Input() maximumSelection?: number;

  /* optional: if the overlay should launch when the input is in focus */
  @Input() launchOnFocus?: boolean;

  /* if the overlay is set to "always show" */
  @Input() alwaysShowOverlay: boolean;

  /* if the search icon on the left should be hidden */
  @Input() hideSearchIcon: boolean;

  /* overlay height (default: 200) */
  @Input() overlayHeight: number = 200;

  /* filter action */
  @Output() filter: EventEmitter<any> = new EventEmitter();

  /* item selected action */
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  /* item removed action */
  @Output() itemRemoved: EventEmitter<ISearchChip> = new EventEmitter<ISearchChip>();

  /* chip clicked */
  @Output() chipClicked: EventEmitter<ISearchChip> = new EventEmitter<ISearchChip>();

  /* overlay template component */
  @ViewChild(OverlayTemplateComponent)
  public search: OverlayTemplateComponent;

  /* children component for options */
  @ContentChildren(SearchOptionComponent)
  public options: QueryList<SearchOptionComponent>;


  /* selected option */
  public selected: SearchOptionComponent;

  /* focus state */
  focus: boolean;


  constructor(
    private _searchService: SearchService,
    _renderer: Renderer2
  ) {
    super(_renderer);
    this._searchService.register(this);
  }

  ngAfterViewInit(): void {
  }

  /**
   * override: on change action
   */
  changeAction($event): void {
    this.onChange($event);
    this.checkDirty();

    if (this.value.length > 0) {
      if (!this.search.showing) {
        this.showDropdown();
      }
    } else {
      this.hideDropdown();
    }

    this.filterAction();
  }

  /**
   * focus action
   */
  focusAction() {
    if (this.launchOnFocus) {
      this.search.show();
    }
    this.focus = true;
  }

  /**
   * blur action
   */
  blurAction() {
    this.focus = false;
  }

  /**
   * show options action
   */
  public showDropdown(): void {
    this.search.show();
  }

  /**
   * hide options action
   */
  public hideDropdown(): void {
    if (!this.alwaysShowOverlay) {
      this.search.hide();
      this.focus = false;
    }
  }

  /**
   * keydown event
   */
  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (this.search.showing) {
        this.hideDropdown();
      }
    }
  }

  /**
   * on select item
   */
  public select(selection: any): void {
    this.itemSelected.emit(selection);
    this.hideDropdown();
  }

  /**
   * on filter action
   */
  public filterAction(): void {
    this.filter.emit();
  }

  /**
   * on close item
   * @param selection
   */
  public onClose(selection: ISearchChip): void {
    this.itemRemoved.emit(selection);
  }

  /**
   * chip item clicked
   * @param selection
   */
  public onChipSelected(selection: ISearchChip): void {
    this.chipClicked.emit(selection);
  }
}
