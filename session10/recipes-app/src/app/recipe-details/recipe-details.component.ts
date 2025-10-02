import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../types/recipe';
import { RecipeRequestService } from '../services/recipe-request.service';

@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

  recipeItem! : Recipe;
  // recipes!: Recipe[] ;

  @Input() recipeId! : string;
  constructor(
    // private activatedRout : ActivatedRoute
    private recipeRequestService : RecipeRequestService
    ){
  }

  ngOnInit(){
    // let id = +this.activatedRout.snapshot.params['recipeId']
    // console.log(id)
    // console.log(this.recipes.find(obj => obj.id === id))
    // this.recipeItem =this.recipes.find(obj => obj.id === id)
    // console.log(this.recipeId)
    // this.recipeItem = this.recipes.find(obj => obj.id === +this.recipeId)
    // console.log(this.recipeItem)

    this.recipeRequestService.getRecipeById(this.recipeId).subscribe((data : Recipe) => this.recipeItem = data)
  }





}
