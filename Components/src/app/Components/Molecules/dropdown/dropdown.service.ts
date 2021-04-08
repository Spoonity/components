import { Injectable } from '@angular/core';
import {DropdownComponent} from './dropdown.component';

@Injectable()
export class DropdownService {

  private select: DropdownComponent;

  public register(select: DropdownComponent) {
    this.select = select;
  }

  public getSelect(): DropdownComponent {
    return this.select;
  }
}
