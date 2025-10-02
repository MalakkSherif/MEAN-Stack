import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RecipeRequestService } from '../services/recipe-request.service';

@Component({
  selector: 'app-add-recipe-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe-reactive.component.html',
  styleUrl: './add-recipe-reactive.component.css'
})
export class AddRecipeReactiveComponent {

  recipeForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private recipeRequestService: RecipeRequestService) {
    // this.recipeForm= new FormGroup({
    //   recipeName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   description: new FormControl('',[Validators.required,Validators.minLength(10), Validators.maxLength(100)])
    // })

    this.recipeForm = this.fb.group({
      recipeName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]]
    })
  }


  get formControls() {
    return this.recipeForm.controls
  }

  handleSubmit() {
    this.submitted = true
    if (this.recipeForm.valid) {
      console.log(this.recipeForm)
      console.log(this.recipeForm.value)
      this.recipeRequestService.addRecipe(this.recipeForm.value).subscribe(data =>console.log(data) )
    }
  }

}
