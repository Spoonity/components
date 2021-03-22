import {Directive, HostListener, Input} from '@angular/core';
import {MenuComponent} from './menu.component';

@Directive({
  selector: '[spMenuTrigger]'
})
export class MenuTriggerDirective {

  /* menu component to launch */
  @Input() spMenuTrigger: MenuComponent;

  /* click event listener */
  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.spMenuTrigger.toggleMenu();
  }
}
