import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  @Input({ required: true }) user!: {
    id: string;
    avatar: string;
    name: string;  
  } 

  select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

  users = DUMMY_USERS;


}
