import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-search-example',
  templateUrl: './search-example.component.html',
  styleUrls: ['./search-example.component.less']
})
export class SearchExampleComponent implements OnInit {

  filteredList: any[] = [];
  selectedItems: {id: string; icon: string; text: string}[] = [];
  searchModel: string;

  allOptions: any[] = [
    {id: 0, name: 'Option # 1', address: 'British Columbia'},
    {id: 1, name: 'Option # 2', address: 'Alberta'},
    {id: 2, name: 'Option # 3', address: 'Saskatchewan'},
    {id: 3, name: 'Option # 4', address: 'Winnipeg'},
    {id: 4, name: 'Option # 5', address: 'Quebec'},
    {id: 5, name: 'Option # 6', address: 'Ontario'},
    {id: 6, name: 'Option # 7', address: 'Newfoundland and Labrador'},
    {id: 7, name: 'Option # 8', address: 'Nova Scotia'},
    {id: 8, name: 'Option # 9', address: 'Prince Edward Island'},
    {id: 9, name: 'Option # 10', address: 'Northwest Territories'},
    {id: 10, name: 'Option # 11', address: 'Yukon Territories'},
    {id: 10, name: 'Option # 11', address: 'Nunavut'}
  ];

  constructor() { }

  ngOnInit() {
  }


  public filter() {
    let _filteredList = [];
    const _filterByAddress = Object.assign([], this.allOptions)
      .filter(s => s.address.toString().toLowerCase().
      indexOf(this.searchModel.toLowerCase()) > -1);

    _filteredList = [..._filterByAddress];

    const _filterByName = Object.assign([], this.allOptions)
      .filter(s => s.name.toString().toLowerCase().
      indexOf(this.searchModel.toLowerCase()) > -1);

    _filterByName.forEach(f => {
      if (!_filteredList.find(x => x.id == f.id)) {
        _filteredList.push(f);
      }
    });

    this.filteredList = [..._filteredList];
  }

  itemSelected(selectedItem: any) {
    console.log(selectedItem);
    this.selectedItems.push({
      id: selectedItem.id.toString(),
      text: selectedItem.name,
      icon: 'favorite'
    });

    // clear model
    this.searchModel = '';
  }
}
