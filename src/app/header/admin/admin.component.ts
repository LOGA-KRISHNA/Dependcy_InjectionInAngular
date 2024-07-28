import { Component } from '@angular/core';
import { UserListComponent } from "./user-list/user-list.component";
import { UserService } from '../../Services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [UserListComponent,FormsModule],
  providers:[UserService],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
    constructor(private userService:UserService){

    }
    name:string="";
    gender:string="";
    subType:string="";
    status:string="";

    newUser(){
      this.userService.createUser(this.name,this.gender,this.subType,this.status);
      console.log(this.userService.getAllUsers());
      
    }
}
