import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root',
})
export class LoggerService{
    LogMessg(name:string,status:string){
        console.log(name+" "+status);
        
    }
}