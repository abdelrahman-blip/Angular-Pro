import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewtaskComponent } from './newtask/newtask.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewtaskComponent],
  standalone:true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})


export class TasksComponent {
@Input({required: true}) UserId ! : string;
@Input({required: true}) Username! : string;
ShowingNewTask = false;

// TasksService: TasksService
// constructor(tasksService: TasksService){
// this.TasksService = tasksService
// }

//this is another approah of Injecting and it is more Convenient in TypeScript
constructor(private taskService : TasksService){}

get FetchTasks(){
 return this.taskService.GetTaskById(this.UserId);
}

OnClickComplete(id:string){
  this.taskService.RemoveTask(id);
}

OnClickAddNewTask(){
  this.ShowingNewTask = true;
}

OnClickCancel(){
  this.ShowingNewTask = false;
}

}
