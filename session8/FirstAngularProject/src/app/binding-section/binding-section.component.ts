import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding-section',
  imports: [FormsModule],
  templateUrl: './binding-section.component.html',
  styleUrl: './binding-section.component.css'
})
export class BindingSectionComponent {
  username : string = "Malak"
  imagesrc : string = "Top 25 Social Media Platforms with Over 100 Million Active Users.jpg"
  isAdmin : boolean = false


  handleAlert(name: string){
    alert(`Welcome ${name}`)
  }
}
