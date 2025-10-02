import { Recipe } from "./recipe";

export interface Response {

    limit : number,
    recipes: Array<Recipe>,
    skip : number,
    total : number
}
