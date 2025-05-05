import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { TasksService } from '../tasks.service';
import { TasksComponent } from '../tasks.component';

interface NewData{
  title: string
  summary:string
  date:string
} 
@Component({
  selector: 'app-newtask',
  imports: [FormsModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.css'
})

export class NewtaskComponent {
@Input({required : true}) UserId! : string
@Output() ClosingEventEmitval = new EventEmitter();
TitleInput = "";
SummaryInput = "";
DateInput = "";

//@Output() AddingNewData = new EventEmitter<NewData>();

//we can Inject Our Service in another Approach Using Inject 
tasksService = inject(TasksService);

  OnClickCancel(){
    this.ClosingEventEmitval.emit();
  }

  OnSubmite(){
    this.tasksService.AddNewTask({
      title : this.TitleInput,
      summary : this.SummaryInput,
      date : this.DateInput

    },this.UserId)
    this.ClosingEventEmitval.emit();
  }

  // OnSubmite(){
  //   this.AddingNewData.emit({
  //     title : this.TitleInput,
  //     summary : this.SummaryInput,
  //     date : this.SummaryInput
  //   });
  // }
}
