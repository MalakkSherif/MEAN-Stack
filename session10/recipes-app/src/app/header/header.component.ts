import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  counter? : number;

  constructor(private counterService: CounterService) { }

  ngOnInit(){
    this.counterService.getCounter().subscribe(data => this.counter = data)
  }

}
