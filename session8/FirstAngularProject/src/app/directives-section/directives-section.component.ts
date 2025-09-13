import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-section',
  imports: [CommonModule],
  templateUrl: './directives-section.component.html',
  styleUrl: './directives-section.component.css'
})
export class DirectivesSectionComponent {

  users : Array<string> =["Malak", "Mariam", "Mohamed"]

  students : any[] = [
    {id: 1, name: "Malak", age: 17, isAdmin: true},
    {id: 2, name: "Mariam", age: 25, isAdmin: false},
    {id: 3, name: "Mohamed", age: 28, isAdmin: true},
  ]


}
