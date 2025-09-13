import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input() taskItem! : Task;

  @Output() DeleteTask = new EventEmitter<number>()

  check : boolean = false

  isChecked(){
    this.taskItem.checked=true;
  }

  handleDelete(id : number){
    this.DeleteTask.emit(id)
  }

}
