import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { DrinkVO } from '../models/DrinkVO';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Drink } from '../models/Drink';
import { Ingredient } from '../models/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  ROOT_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

  constructor(private http: HttpClient) { }

  public searchBy(searchString, filter): Observable<DrinkVO[]> {
    let response = new Subject<DrinkVO[]>();

    this.getDrinks(filter, searchString).subscribe(
      succ => {
        response.next(this.transformDrinks(succ.drinks));
      },
      err => {
        console.log(err);
        response.next([]);
      }
    )

    return response.asObservable();
  }

  public filterBy(...filterOptions): Observable<DrinkVO[]> {
    return of([]);
  }

  private getDrinks(param, query): Observable<any> {
    return this.http.get(`${this.ROOT_URL}?${param}=${query}`);
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
        drinkTHumb: drink['strDrinkThumb'],
        ingredients: ingredientList
      })
    });

    return returnArr;
  }
}
