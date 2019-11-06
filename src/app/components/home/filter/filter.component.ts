import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterOptionsService } from 'src/app/shared/services/filter-options.service';
import { SearchOptions } from 'src/app/shared/models/SearchOptions';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Output() filterEvent = new EventEmitter<SearchOptions>();
  categoryList: string[] = [];
  glassList: string[] = [];
  searchOptions: SearchOptions = new SearchOptions();

  constructor(private filterOptions: FilterOptionsService) { }

  ngOnInit() {
    this.loadFilter("c", this.categoryList);
    this.loadFilter("g", this.glassList);
  }

  public filterBy(searchStr: string, param) {
    this.searchOptions.queryParam = param;
    this.searchOptions.searchString = this.prepSearchString(searchStr);
    this.filterEvent.emit(this.searchOptions);
  }

  private prepSearchString(string) {
    console.log(string);

    return string.replace(/ /g, "_");
  }

  private loadFilter(filter, arr) {
    this.filterOptions.getFilter(filter).subscribe(
      succ => {
        console.log(succ.drinks);

        succ.drinks.forEach(item => {
          arr.push(Object.values(item)[0]);
        });
      },
      err => {
        console.log(err);
      }
    );
  }

}
