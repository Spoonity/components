import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-story-example',
  templateUrl: './search-story-example.component.html',
  styleUrls: ['./search-story-example.component.less']
})
export class SearchStoryExampleComponent implements OnInit {

  @Input() size: 'medium' | 'large' | 'small' = 'medium';
  @Input() filterSize: 'medium' | 'large' | 'small' | 'noDropdown';

  SearchModel: string;
  SelectedItems: {id: string; icon: string; text: string}[] = [];
  FilteredList: any[] = [];

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

  constructor() { }

  ngOnInit(): void {

  }

  public filter(searchType: string): void {
    switch (searchType) {
      case 'large':
        this.FilteredList = this._filterItems(this.SearchModel, this.SelectedItems);
        break;
      case 'medium':
        this.FilteredList = this._filterItems(this.SearchModel, this.SelectedItems);
        break;
      case 'small':
        this.FilteredList = this._filterItems(this.SearchModel, this.SelectedItems);
        break;
      case 'noDropdown':
        this.FilteredList = this._filterItems(this.SearchModel, []);
        break;
    }
  }

  ItemSelected(selectedItem: any): void {
    this.SelectedItems.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite'
    });

    // clear model
    this.SearchModel = '';
  }

  ItemRemoved(removedItem: any): void {
    this.SelectedItems = Array.from(
      this.SelectedItems.filter(s => s.id.toString() !== removedItem.id.toString())
    );
  }

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

  getNoDropdownList(): any[] {
    return this.SearchModel == null || this.SearchModel === ''
      ? this.allOptions
      : this.FilteredList;
  }

}
