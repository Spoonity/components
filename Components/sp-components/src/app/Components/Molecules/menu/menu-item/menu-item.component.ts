import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {MenuComponent} from '../menu.component';
import {MenuService} from '../menu.service';
import {error} from 'util';

@Component({
  selector: 'spt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.less']
})
export class MenuItemComponent implements OnInit {
  /* item id */
  @Input() public itemId: string;

  /* start icon */
  @Input() public startIcon: string;

  /* prevent closing the menu when this item is clicked */
  @Input() public preventClose: boolean;

  /* checkbox model (for multiple selections) */
  @Input() public checkboxModel: boolean;

  /* bind class.active */
  @HostBinding('class.active')
  public active = false;

  /* parent component reference */
  private menu: MenuComponent;

  /* click event listener */
  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.checkboxModel = !this.checkboxModel;
    this.menu.selectMenuItem(this);
  }

  constructor(
    private _menuService: MenuService
  ) {
    this.menu = this._menuService.getMenu();
  }

  ngOnInit() {
    // verify input
    if (this.menu.multiple) {
      if (this.itemId == null) {
        throw new Error('spt-menu-item: missing attribute: itemId for multiple selection');
      }
    }
  }

  /**
   * set active status
   */
  public setActiveStyles(): void {
    this.active = true;
  }

  /**
   * set inactive status
   */
  public setInactiveStyles(): void {
    this.active = false;
  }

  /**
   * select menu item
   */
  public selectItem() {
    this.menu.selectMenuItem(this);
  }

  /**
   * if multiple items can be selected
   */
  public isMultiple(): boolean {
    return this.menu.multiple;
  }
}
