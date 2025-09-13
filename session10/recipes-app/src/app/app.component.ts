import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RecipesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
