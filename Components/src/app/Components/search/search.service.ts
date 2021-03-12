import { Injectable } from '@angular/core';
import { SearchComponent } from './search.component';

@Injectable()
export class SearchService {

  private search: SearchComponent;

  public register(select: SearchComponent) {
    this.search = select;
  }

  public getSearch(): SearchComponent {
    return this.search;
  }
}
