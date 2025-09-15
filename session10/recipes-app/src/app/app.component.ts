import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,RecipesListComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipes-app';
}
