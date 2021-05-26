import {Component, HostBinding, HostListener, Input, OnInit} from '@angular/core';
import {SearchComponent} from '../search.component';
import {SearchService} from '../search.service';

@Component({
  selector: 'spt-search-option',
  templateUrl: './search-option.component.html',
  styleUrls: ['./search-option.component.less']
})
export class SearchOptionComponent implements OnInit {

  @Input() value;

  private search: SearchComponent;

  /* bind class.selected */
  @HostBinding('class.selected')
  public get selected(): boolean {
    return this.search.selected === this;
  }

  /* bind class.active */
  @HostBinding('class.active')
  public active = false;

  /* click event listener */
  @HostListener('click', ['$event'])
  public onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.search.select(this.value);
  }

  constructor(
    private _searchService: SearchService
  ) {
    this.search = this._searchService.getSearch();
  }

  ngOnInit() {
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
}
