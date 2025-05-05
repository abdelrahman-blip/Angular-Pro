import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { dummytasks } from './task.model';
import { CardComponent } from "../../Shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent,CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) dummytasks! : dummytasks;
  @Output() CompletedTaskId = new EventEmitter<string>();

  OnClickComplete(){
    this.CompletedTaskId.emit(this.dummytasks.id);
  }
}
