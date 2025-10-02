import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../types/response';
import { map } from 'rxjs';
import { Recipe } from '../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeRequestService {

  constructor(private http: HttpClient) {}

  getRecipes(){
    return this.http.get<Response>('https://dummyjson.com/recipes').pipe(map((res : Response)=> res.recipes))
  }

  getRecipeById(id : string){
    return this.http.get<Recipe>(`https://dummyjson.com/recipes/${id}`)
  }


  addRecipe(newRecipe : Recipe){
   return this.http.post('https://dummyjson.com/recipes', newRecipe)
  }

  updateRecipe(id : string, updatedRecipe : Partial<Recipe>){

    return this.http.patch(`https://dummyjson.com/recipes/${id}`, updatedRecipe)
  }

  deleteRecipe(id : number){
    return this.http.delete(`https://dummyjson.com/recipes/${id}`)
  }

}
