import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products-App';
}
