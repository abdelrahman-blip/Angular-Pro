import { Component, computed, EventEmitter, Input, input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../Shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent,CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
 @Input({required : true}) user! : User;
 @Input({required : true}) IsActive! : boolean;
 @Output() Selected = new EventEmitter();

 users = DUMMY_USERS;
 
 OnSelectedUser(){
  this.Selected.emit(this.user.id);
 }
 
}
