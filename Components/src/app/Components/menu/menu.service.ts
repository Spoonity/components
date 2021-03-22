import {Injectable} from '@angular/core';
import {MenuComponent} from './menu.component';

@Injectable()
export class MenuService {

  private menu: MenuComponent;

  public register(menu: MenuComponent) {
    this.menu = menu;
  }

  public getMenu(): MenuComponent {
    return this.menu;
  }
}
