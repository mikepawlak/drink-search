import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { DrinkVO } from '../models/DrinkVO';
import { HttpClient } from '@angular/common/http';
import { Drink } from '../models/Drink';
import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  ROOT_URL = "https://www.thecocktaildb.com/api/json/v1/1/";
  SEARCH_PARAM_MAP = {
    "name": "s",
    "ingredient": "i",
    "category": "c",
    "glass": "g",
    "alcoholic": "a"

  }

  constructor(private http: HttpClient) { }

  public searchBy(searchString, param): Observable<DrinkVO[]> {
    let drinks = new Subject<DrinkVO[]>();
    let route = (param === "name") ? "search" : "filter";

    this.getDrinks(this.SEARCH_PARAM_MAP[param], searchString, route).subscribe(
      succ => {
        if (succ && succ.drinks) {
          drinks.next(this.transformDrinks(succ.drinks));
        } else {
          drinks.next([]);
        }
      },
      err => {
        console.log(err);
        drinks.next([]);
      }
    )

    return drinks.asObservable();
  }


  private getDrinks(param, query, route): Observable<any> {
    return this.http.get(`${this.ROOT_URL}${route}.php?${param}=${query}`);
  }

  private transformDrinks(drinkArr: Drink[]): DrinkVO[] {
    let returnArr = [];
    drinkArr.forEach(drink => {
      //iterate through each "ingredient" and "measure" property to generate list
      let ingredientList = [];
      [...Array(15)].forEach((_, i) => {
        ingredientList.push(new Ingredient(drink[`strIngredient${i + 1}`], drink[`strMeasure${i + 1}`]))
      });

      returnArr.push({
        id: drink['idDrink'],
        name: drink['strDrink'],
        category: drink['strCategory'],
        alcoholic: drink['strAlcoholic'],
        glass: drink['strGlass'],
        instructions: drink['strInstructions'],
        drinkThumb: drink['strDrinkThumb'],
        ingredients: ingredientList
      })
    });

    return returnArr;
  }
}
