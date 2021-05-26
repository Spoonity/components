import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild
} from '@angular/core';
import {OverlayTemplateComponent} from '../../shared/overlay-template/overlay-template.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {MenuService} from './menu.service';

@Component({
  selector: 'spt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  /* if multiple selection **/
  @Input() multiple: boolean;

  /* close menu when item is clicked */
  @Input() closeOnItemClick = true;

  /* include search on the items */
  @Input() search: boolean;

  /* if a select all item is included **/
  @Input() selectAllOption: boolean;

  /* toggle select all */
  @Output() toggleSelectAll: EventEmitter<any> = new EventEmitter<any>();

  /* searchModel (two-way binding) */
  @Input() searchModel: string;
  @Output() searchModelChange: EventEmitter<any> = new EventEmitter<any>();

  /* selected items list (two-way binding) */
  @Input() selectedItems: string[] = [];
  @Output() selectedItemsChange: EventEmitter<any> = new EventEmitter<any>();

  /* search input element */
  @ViewChild('searchEl')
  public searchEl: ElementRef;

  /* overlay template component */
  @ViewChild(OverlayTemplateComponent)
  public menu: OverlayTemplateComponent;

  /* menu items component */
  @ContentChildren(MenuItemComponent)
  public menuItems: QueryList<MenuItemComponent>;


  /* select all checkbox model */
  public selectAll: boolean;

  /* selected Menu item */
  public selectedItem: MenuItemComponent;

  /* is the menu showing */
  private _menuShowing = false;

  constructor(
    private _menuService: MenuService
  ) {
    this._menuService.register(this);
  }

  ngOnInit() {
  }

  /**
   * toggle show state of the menu items
   */
  public toggleMenu(): void {
    this._menuShowing = !this.isShowing();
    if (this._menuShowing) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  /**
   * show menu action
   */
  public showMenu(): void {
    this.menu.show();
    if (this.search) {
      try {
        this.searchEl.nativeElement.focus();
      } catch (e) {}
    }
  }

  /**
   * hide menu action
   */
  public hideMenu(): void {
    this.menu.hide();
    this.searchModel = '';
    this.searchModelChange.emit(this.searchModel);
  }

  /**
   * visibility state of the overlay template
   */
  isShowing(): boolean {
    return this.menu ? this.menu.showing : false;
  }

  /**
   * change model action
   */
  change(): void {
    this.searchModelChange.emit(this.searchModel);
  }

  /**
   * select menu item
   */
  public selectMenuItem(item: MenuItemComponent): void {
    if (!this.selectedItems) {
      this.selectedItems = [];
    }

    this.selectedItem = item;
    if (!this.multiple) {
      if (this.closeOnItemClick) {
        this.hideMenu();
      }
    } else {
      if (item.checkboxModel) {
        if (!this.selectedItems.includes(item.itemId)) {
          this.selectedItems.push(item.itemId);
        }
      } else {
        this.selectedItems = Array.from(this.selectedItems.filter((s: string) => s !== item.itemId));
        if (this.selectAllOption) {
          this.selectAll = false;
        }
      }
      this.selectedItemsChange.emit(this.selectedItems);
    }
  }

  /**
   * keydown event (escape is pressed)
   */
  public onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' || event.key === 'Esc') {
      if (this.menu.showing) {
        this.hideMenu();
      }
    }
  }

  /**
   * toggle select all
   */
  public toggleSelectAllAction(fromCheckbox?: boolean): void {
    if (!fromCheckbox) {
      this.selectAll = !this.selectAll;
    }
    this.toggleSelectAll.emit(this.selectAll);
  }
}
