import { User } from "../Models/user";
import { Injectable } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable({
  providedIn: 'root',
  
})
export class UserService{
    constructor(private logger:LoggerService){

    }
    users:User[]=[
        new User('Loga','Male','Monthly','Active'),
        new User('Loga Krishna','Male','Monthly','Active'),
        new User('Hello','Male','Monthly','Active'),
        
    ]
    getAllUsers(){
        return this.users;
    }
    createUser(name:string,gender:string,subType:string,status:string){
        let user=new User(name,gender,subType,status);
        this.users.push(user);
        this.logger.LogMessg(name,status);
    }
}