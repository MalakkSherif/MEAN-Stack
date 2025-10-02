import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter? : number;

  constructor(private counterService: CounterService){}

  ngOnInit(){
    this.counterService.getCounter().subscribe(data => this.counter = data)
  }

  decreaseCounter(){
    this.counterService.updateCounter(this.counter! -1)
  }

  increaseCounter(){
    this.counterService.updateCounter(this.counter! +1)
  }
}
