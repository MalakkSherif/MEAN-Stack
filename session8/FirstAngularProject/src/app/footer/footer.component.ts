import { Component } from '@angular/core';
import { ButtonsComponent } from './buttons/buttons.component';


@Component({
  selector: 'app-footer',
  imports: [ButtonsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
