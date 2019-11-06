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
  searchOptions: SearchOptions = new SearchOptions();

  constructor(private filterOptions: FilterOptionsService) { }

  ngOnInit() {
    this.filterOptions.getFilter("c").subscribe(
      succ => {
        succ.drinks.forEach(cat => {
          this.categoryList.push(cat.strCategory);
        });

      },
      err => {
        console.log(err);
      }
    );
  }

  public filterBy(category: string, param) {
    this.searchOptions.queryParam = param;
    this.searchOptions.searchString = this.prepCategoryString(category);
    this.filterEvent.emit(this.searchOptions);
  }

  private prepCategoryString(category) {
    return category.replace(/ /g, "_");
  }

}
