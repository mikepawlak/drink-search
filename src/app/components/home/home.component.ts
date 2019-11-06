import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/shared/services/drink.service';
import { DrinkVO } from 'src/app/shared/models/DrinkVO';
import { SearchOptions } from 'src/app/shared/models/SearchOptions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  drinkList: DrinkVO[] = [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    //init with a list of alcoholic drinks
    this.drinkService.searchBy("Alcoholic", "alcoholic").subscribe(
      succ => {
        this.drinkList = succ;

      }, err => {
        console.log(err);

      }
    );
  }

  public searchDrinks(options: SearchOptions) {
    this.drinkService.searchBy(options.searchString, options.queryParam).subscribe(
      succ => {
        this.drinkList = succ;
      }, err => {
        console.log(err);
      }
    );
  }
}
