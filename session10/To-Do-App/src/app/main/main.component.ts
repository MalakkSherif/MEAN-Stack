import { Component } from '@angular/core';
import { Task} from '../task';
import { TasksComponent } from '../tasks/tasks.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-main',
  imports: [TasksComponent, AddTaskComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  tasks : Task[] = [];

  handleAddItem(description: string){
    if(this.tasks.length === 0){
      this.tasks.push({id:1,description:description,checked:false})
    }else{
      this.tasks.push({id:this.tasks.length+1,description:description,checked:false})
      
    }
  }

  handletDeleteItem(id : number){
    this.tasks=this.tasks.filter(obj => obj.id !== id)
  }


}
