import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchOptions } from 'src/app/shared/models/SearchOptions';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<SearchOptions>();

  searchOptions: SearchOptions = new SearchOptions("");

  constructor() { }

  ngOnInit() {
    this.searchOptions.queryParam = 'name';
  }

  public search() {
    if (this.searchOptions.searchString.length > 0) {
      this.searchEvent.emit(this.searchOptions);
    }
  }

  public handleInput(key) {
    if (key === "Enter") {
      this.search();
    }
  }

  public handleDropdown(value) {
    this.searchOptions.queryParam = value;
  }

}
