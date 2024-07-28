import { Component } from '@angular/core';
import { UserDetialsComponent } from "../user-detials/user-detials.component";
import { UserService } from '../../../Services/user.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserDetialsComponent,NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
    constructor(private userservice:UserService){

    }
    userList=this.userservice.getAllUsers();
}
