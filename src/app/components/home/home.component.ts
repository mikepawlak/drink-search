import { Component, OnInit } from '@angular/core';
import { DrinkService } from 'src/app/shared/services/drink.service';
import { DrinkVO } from 'src/app/shared/models/DrinkVO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  drinkList: DrinkVO[] = [];

  constructor(private drinkService: DrinkService) { }

  ngOnInit() {
    this.drinkService.searchBy("vodka", "s").subscribe(
      succ => {
        this.drinkList = succ;

      }, err => {
        console.log(err);

      }
    );
  }

  public searchDrinks(options) {
    console.log(options);

  }

}
