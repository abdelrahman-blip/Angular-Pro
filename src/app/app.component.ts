import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { TaskComponent } from './tasks/task/task.component';

@Component({  
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  //DynamicId = 'u1';
  DynamicId?:string;
  
 get SelectedUser(){
   return this.users.find((x) => x.id === this.DynamicId);
  }

  OnSelectedUser(id:string){
    this.DynamicId = id;
  }
}
