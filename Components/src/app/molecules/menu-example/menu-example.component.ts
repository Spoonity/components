import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spt-menu-example',
  templateUrl: './menu-example.component.html',
  styleUrls: ['./menu-example.component.less']
})
export class MenuExampleComponent implements OnInit {

  constructor() { }

  actionText: {[key: string]: any} = {};

  searchModel1: string;
  searchModel2: string;
  searchModel3: string;
  searchModel4: string;
  searchModel5: string;

  selectedItems1 = ['0', '1'];
  selectedItems2 = [];
  selectedItems3 = [];
  selectedItems4 = [];
  selectedItems5 = [];

  menuItems = [
    {id: 0, text: 'A - option 1', icon: 'favorite'},
    {id: 1, text: 'B - option 2', icon: 'favorite'},
    {id: 2, text: 'C - option 3', icon: 'favorite'},
    {id: 3, text: 'D - option 4', icon: 'favorite'},
    {id: 4, text: 'E - option 5', icon: 'favorite'},
    {id: 5, text: 'F - option 6', icon: 'favorite'},
    {id: 6, text: 'G - option 7', icon: 'favorite'},
    {id: 7, text: 'H - option 8', icon: 'favorite'},
    {id: 8, text: 'I - option 9', icon: 'favorite'},
    {id: 9, text: 'J - option 10', icon: 'favorite'},
    {id: 10, text: 'K - option 11', icon: 'favorite'},
    {id: 11, text: 'L - option 12', icon: 'favorite'},
    {id: 12, text: 'M - option 13', icon: 'favorite'},
    {id: 13, text: 'N - option 14', icon: 'favorite'},
    {id: 14, text: 'O - option 15', icon: 'favorite'},
    {id: 15, text: 'P - option 16', icon: 'favorite'},
    {id: 16, text: 'Q - option 17', icon: 'favorite'}
  ];

  filteredMenuItems1 = [];
  filteredMenuItems2 = [];
  filteredMenuItems3 = [];
  filteredMenuItems4 = [];
  filteredMenuItems5 = [];

  ngOnInit() {
    this.filteredMenuItems1 = Array.from(this.menuItems);
    this.filteredMenuItems2 = Array.from(this.menuItems);
    this.filteredMenuItems3 = Array.from(this.menuItems);
    this.filteredMenuItems4 = Array.from(this.menuItems);
    this.filteredMenuItems5 = Array.from(this.menuItems);
  }

  actionSelected(text: string, id: number) {
    this.actionText[id] = text;
  }

  filter1() {
    this.filteredMenuItems2 = this._filter(this.searchModel1);
  }

  filter2() {
    this.filteredMenuItems2 = this._filter(this.searchModel2);
  }

  filter3() {
    const _filtered = this._filter(this.searchModel3);
    const _selected = this._addSelectedItems(_filtered, this.selectedItems3);
    this.filteredMenuItems3 = _filtered.concat(_selected);
  }

  filter4() {
    const _filtered = this._filter(this.searchModel4);
    const _selected = this._addSelectedItems(_filtered, this.selectedItems4);
    this.filteredMenuItems4 = _filtered.concat(_selected);
  }

  filter5() {
    const _filtered = this._filter(this.searchModel5);
    const _selected = this._addSelectedItems(_filtered, this.selectedItems5);
    this.filteredMenuItems5 = _filtered.concat(_selected);
  }

  toggleSelectAll(selectAll: boolean) {

    this.selectedItems5 = selectAll ? Array.from(this.menuItems, x => x.id.toString()) : [];
  }

  private _addSelectedItems(filteredItems: any[], selectedItems: string[]) {
    return Array.from(
      this.menuItems.filter(s => selectedItems.includes(s.id.toString()) && !filteredItems.includes(s.id.toString()))
    );
  }

  private _filter(model: string) {
    if (model === '' || model == null) {
      return Array.from(this.menuItems);
    } else {
      return Object.assign([], this.menuItems)
        .filter(s => s.text.toString().toLowerCase().
        indexOf(model.toLowerCase()) > -1);
    }
  }
}
