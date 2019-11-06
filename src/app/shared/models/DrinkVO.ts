import { Ingredient } from './Ingredient';

export interface DrinkVO {
    id: number,
    name: string,
    tags: string,
    category: string,
    alcoholic: string,
    glass: string,
    instructions: string,
    drinkThumb: string,
    ingredients: Ingredient[],
}