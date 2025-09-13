import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CustomPipe } from '../pipes/custom.pipe';
import { Recipe } from '../types/recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [DatePipe, UpperCasePipe,CustomPipe],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() recipeItem! : Recipe ;

  @Output() SendToParent = new EventEmitter<number>()

  handleDelete(id: number){
    this.SendToParent.emit(id)
  }
}
