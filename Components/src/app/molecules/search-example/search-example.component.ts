import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'spt-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.less']
})
export class SearchExampleComponent implements OnInit {

  /* filtered list (by example type) */
  largeFilteredList: any[] = [];
  mediumFilteredList: any[] = [];
  smallFilteredList: any[] = [];
  noDropdownFilteredList: any[] = [];

  /* selected items - chips (by example type */
  largeSelectedItems: {id: string; icon: string; text: string}[] = [];
  largeSelectedItemsReadonly: {id: string; icon: string; text: string}[] = [];
  mediumSelectedItems: {id: string; icon: string; text: string}[] = [];
  smallSelectedItems: {id: string; icon: string; text: string; tooltip?: string}[] = [];

  /* search model (by example type) */
  largeSearchModel: string;
  mediumSearchModel: string;
  smallSearchModel: string;
  noDropdownSearchModel: string;

  /* option items */
  allOptions: any[] = [
    {id: 0, name: 'banana', color: 'yellow', type: 'fruit'},
    {id: 1, name: 'apple', color: 'red', type: 'fruit'},
    {id: 2, name: 'orange', color: 'orange', type: 'fruit'},
    {id: 3, name: 'strawberry', color: 'pink', type: 'fruit'},
    {id: 4, name: 'blueberry', color: 'blue', type: 'fruit'},
    {id: 5, name: 'kale', color: 'green', type: 'vegetable'},
    {id: 6, name: 'carrot', color: 'orange', type: 'vegetable'},
    {id: 7, name: 'broccoli', color: 'green', type: 'vegetable'},
    {id: 8, name: 'spinach', color: 'green', type: 'vegetable'},
    {id: 9, name: 'asparagus', color: 'green', type: 'vegetable'},
  ];

  ngOnInit(): void {
    this.largeFilteredList = [...this.allOptions];
    this.mediumFilteredList = [...this.allOptions];
    this.smallFilteredList = [...this.allOptions];
  }

  /**
   * filter action via type
   */
  public filter(searchType: string): void {
    switch (searchType) {
      case 'large':
        this.largeFilteredList = this._filterItems(this.largeSearchModel, this.largeSelectedItems);
        break;
      case 'medium':
        this.mediumFilteredList = this._filterItems(this.mediumSearchModel, this.mediumSelectedItems);
        break;
      case 'small':
        this.smallFilteredList = this._filterItems(this.smallSearchModel, this.smallSelectedItems);
        break;
      case 'noDropdown':
        this.noDropdownFilteredList = this._filterItems(this.noDropdownSearchModel, []);
        break;
    }
  }


  /**
   * filter action given the type
   */
  private _filterItems(model, selectedItems): any[] {
    let _filteredList = [];

    const addToFilteredList = (list: any[]): void => {
      if (_filteredList.length === 0) {
        _filteredList = Array.from(list);
      }
      list.forEach(f => {
        if (!_filteredList.find(x => x.id.toString() === f.id.toString())) {
          _filteredList.push(f);
        }
      });
    };

    const _filterByColor = Object.assign([], this.allOptions)
      .filter(s => s.color.toString().toLowerCase().
      indexOf(model.toLowerCase()) > -1);

    addToFilteredList(_filterByColor);

    const _filterByType = Object.assign([], this.allOptions)
      .filter(s => s.type.toString().toLowerCase().
      indexOf(model.toLowerCase()) > -1);

    addToFilteredList(_filterByType);

    const _filterByName = Object.assign([], this.allOptions)
      .filter(s => s.name.toString().toLowerCase().
      indexOf(model.toLowerCase()) > -1);

    addToFilteredList(_filterByName);

    _filteredList = Array.from(
      _filteredList.filter(s1 => !selectedItems.find(s2 => s1.id.toString() === s2.id.toString()))
    );

    return Array.from(_filteredList);
  }

  /**
   * on select action (Large example type)
   */
  largeItemSelected(selectedItem: any): void {
    this.largeSelectedItems.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite'
    });

    // clear model
    this.largeSearchModel = '';
  }

  /**
   * on select action (Large example type)
   */
  largeItemSelectedReadonly(selectedItem: any): void {
    this.largeSelectedItemsReadonly.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite'
    });

    // clear model
    this.largeSearchModel = '';
  }

  /**
   * on select action (Medium example type)
   */
  mediumItemSelected(selectedItem: any): void {
    this.mediumSelectedItems.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite'
    });

    // clear model
    this.mediumSearchModel = '';
  }

  /**
   * on select action (Small example type)
   */
  smallItemSelected(selectedItem: any): void {
    this.smallSelectedItems.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite',
      tooltip: `tooltip - ${selectedItem.name}`
    });

    // clear model
    this.smallSearchModel = '';
  }

  /**
   * remove item action (Large example type)
   */
  largeItemRemoved(removedItem: any): void {
    this.largeSelectedItems = Array.from(
      this.largeSelectedItems.filter(s => s.id.toString() !== removedItem.id.toString())
    );
  }

  /**
   * remove item action (Large example type)
   */
  largeItemRemovedReadonly(removedItem: any): void {
    this.largeSelectedItemsReadonly = Array.from(
      this.largeSelectedItemsReadonly.filter(s => s.id.toString() !== removedItem.id.toString())
    );
  }

  /**
   * remove item action (Medium example type)
   */
  mediumItemRemoved(removedItem: any): void {
    this.mediumSelectedItems = Array.from(
      this.mediumSelectedItems.filter(s => s.id.toString() !== removedItem.id.toString())
    );
  }

  /**
   * remove item action (Small example type)
   */
  smallItemRemoved(removedItem: any): void {
    this.smallSelectedItems = Array.from(
      this.smallSelectedItems.filter(s => s.id.toString() !== removedItem.id.toString())
    );
  }

  /**
   * return list of options (No Dropdown example type)
   */
  getNoDropdownList(): any[] {
    return this.noDropdownSearchModel == null || this.noDropdownSearchModel === ''
      ? this.allOptions
      : this.noDropdownFilteredList;
  }
}
