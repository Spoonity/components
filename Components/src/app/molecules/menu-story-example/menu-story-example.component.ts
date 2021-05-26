import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-story-example',
  templateUrl: './menu-story-example.component.html',
  styleUrls: ['./menu-story-example.component.less']
})
export class MenuStoryExampleComponent implements OnInit {

  items = [
    {id: 0, text: 'A - option 1', icon: 'favorite'},
    {id: 1, text: 'B - option 2', icon: 'favorite'},
    {id: 2, text: 'C - option 3', icon: 'favorite'},
    {id: 3, text: 'D - option 4', icon: 'favorite'},
  ];
  selectedItems: string[];
  searchModel: string;

  @Input() multiple = false;
  @Input() search = false;
  @Input() selectAllOption = false;
  @Input() iconName: string = null;
  @Input() menuItems = this.items;

  actionText: {[key: string]: any} = {};

  filteredMenuItems = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredMenuItems = Array.from(this.menuItems);
  }

  actionSelected(text: string, id: number) {
    this.actionText[id] = text;
  }

  toggleSelectAll(selectAll: boolean) {

    this.selectedItems = selectAll ? Array.from(this.menuItems, x => x.id.toString()) : [];
  }

  filter() {
    const _filtered = this._filter(this.searchModel);
    const _selected = this._addSelectedItems(_filtered, this.selectedItems);
    this.filteredMenuItems = _filtered.concat(_selected);
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
