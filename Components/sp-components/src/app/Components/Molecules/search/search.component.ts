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
  @Input() selectedItems: {id: string; icon?: string; color?: string; text: string}[] = [];

  /* optional maximum selected items */
  @Input() maximumSelection?: number;

  /* optional: if the overlay should launch when the input is in focus */
  @Input() launchOnFocus?: boolean;

  /* filter action */
  @Output() filter: EventEmitter<any> = new EventEmitter();

  /* item selected action */
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();

  /* item removed action */
  @Output() itemRemoved: EventEmitter<any> = new EventEmitter<any>();

  /* search overlay closed */
  @Output() overlayStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

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
      this.filterAction();
    } else {
      this.hideDropdown();
    }
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
    this.overlayStatusChange.emit(true);
  }

  /**
   * hide options action
   */
  public hideDropdown(): void {
    this.search.hide();
    this.overlayStatusChange.emit(false);
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
   */
  public onClose(selection: any): void {
    this.itemRemoved.emit(selection);
  }
}
