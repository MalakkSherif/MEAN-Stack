import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainComponent } from '../main/main.component';
import { Task } from '../task';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  description : string = ''

  @Output() SendToMain = new EventEmitter<string>()

    addItem(){
      this.SendToMain.emit(this.description)
      this.description=''
  }

  
}
