import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {DropdownService} from '../dropdown.service';
import {DropdownComponent} from '../dropdown.component';

@Component({
  selector: 'spt-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.less']
})
export class OptionComponent implements OnInit {

  /* option value */
  @Input() public value: any;

  /* option display text */
  @Input() public text: string;

  /* bind class.selected */
  @HostBinding('class.selected')
  public get selected(): boolean {
    return this.select.single_selectedOption === this;
  }

  /* bind class.active */
  @HostBinding('class.active')
  public active = false;


  /* checkbox model (for multiple selections) */
  public checkboxModel: boolean;

  /* parent component reference */
  select: DropdownComponent;


  /* click event listener */
  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.select.selectOption(this);
  }


  constructor(
    private _dropdownService: DropdownService
  ) {
    this.select = this._dropdownService.getSelect();
  }

  ngOnInit() {
  }

  /**
   * get option label
   */
  public getLabel(): string {
    return this.text;
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
   * select option item
   */
  public selectItem() {
    this.select.selectOption(this);
  }

}
