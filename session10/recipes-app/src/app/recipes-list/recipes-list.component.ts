import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../types/recipe';
import { RecipeRequestService } from '../services/recipe-request.service';

@Component({
  selector: 'app-recipes-list',
  imports: [RecipeCardComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent {

    recipes!: Recipe[] ;

  handleDeleteRecipe(id : number){
    // this.recipes = this.recipes.filter(obj => obj.id !== id)
    this.recipeRequestService.deleteRecipe(id).subscribe(data=> console.log(data))
  }

  constructor(private recipeRequestService : RecipeRequestService){
  }

  ngOnInit(){
    this.recipeRequestService.getRecipes().subscribe((data : Recipe[]) => this.recipes = data)
  }

}
