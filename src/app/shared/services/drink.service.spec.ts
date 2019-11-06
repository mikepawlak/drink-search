import { TestBed, getTestBed } from '@angular/core/testing';

import { DrinkService } from './drink.service';
import { DrinkVO } from './../models/DrinkVO';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DrinkService', () => {
  let injector: TestBed;
  let service: DrinkService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    injector = getTestBed();
    service = injector.get(DrinkService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<DrinkVO[]> from searchDrinks by name', () => {
    const query = "Margarita";
    const param = "name";
    let dummyDrinks = {
      drinks: []
    };
    dummyDrinks.drinks = [
      {
        "idDrink": "11007",
        "strDrink": "Margarita",
        "strDrinkAlternate": null,
        "strDrinkES": null,
        "strDrinkDE": null,
        "strDrinkFR": null,
        "strDrinkZH-HANS": null,
        "strDrinkZH-HANT": null,
        "strTags": "IBA,ContemporaryClassic",
        "strVideo": null,
        "strCategory": "Ordinary Drink",
        "strIBA": "Contemporary Classics",
        "strAlcoholic": "Alcoholic",
        "strGlass": "Cocktail glass",
        "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
        "strInstructionsES": null,
        "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der äußere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genießers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schütteln und vorsichtig in das Glas geben.",
        "strInstructionsFR": null,
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
        "strIngredient1": "Tequila",
        "strIngredient2": "Triple sec",
        "strIngredient3": "Lime juice",
        "strIngredient4": "Salt",
        "strIngredient5": null,
        "strIngredient6": null,
        "strIngredient7": null,
        "strIngredient8": null,
        "strIngredient9": null,
        "strIngredient10": null,
        "strIngredient11": null,
        "strIngredient12": null,
        "strIngredient13": null,
        "strIngredient14": null,
        "strIngredient15": null,
        "strMeasure1": "1 1/2 oz ",
        "strMeasure2": "1/2 oz ",
        "strMeasure3": "1 oz ",
        "strMeasure4": null,
        "strMeasure5": null,
        "strMeasure6": null,
        "strMeasure7": null,
        "strMeasure8": null,
        "strMeasure9": null,
        "strMeasure10": null,
        "strMeasure11": null,
        "strMeasure12": null,
        "strMeasure13": null,
        "strMeasure14": null,
        "strMeasure15": null,
        "strCreativeCommonsConfirmed": "No",
        "dateModified": "2015-08-18 14:42:59"
      }];


    service.searchBy(query, param).subscribe(drinks => {
      expect(drinks.length).toBe(1);
      expect(drinks[0].name).toBe("Margarita");
      //TODO typecheck rest of DrinkVO
    });

    const req = httpMock.expectOne(`${service.ROOT_URL}search.php?s=${query}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyDrinks);
  });

  it('should return an Observable<DrinkVO[]> from searchDrinks by ingredient', () => {
    const query = "Vodka";
    const param = "ingredient";
    let dummyDrinks = {
      drinks: []
    };
    dummyDrinks.drinks = [
      {
        "strDrink": "'57 Chevy with a White License Plate",
        "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg",
        "idDrink": "14029"
      }];


    service.searchBy(query, param).subscribe(drinks => {
      expect(drinks.length).toBe(1);
      expect(drinks[0].name).toBe("'57 Chevy with a White License Plate");
      //TODO typecheck rest of DrinkVO
    });

    const req = httpMock.expectOne(`${service.ROOT_URL}filter.php?i=${query}`);
    expect(req.request.method).toBe("GET");
    req.flush(dummyDrinks);
  });

  //TODO check searchDrinks by glass, category, and alcoholic


});
