import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NgSwitch } from '@angular/common';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent,FormsModule,HomeComponent,AdminComponent,NgSwitch],
  providers:[SubscribeService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectedTab:string='home';

  HomeClicked(){
    this.selectedTab='home';
  }

  AdminClicked(){
    this.selectedTab='admin';
  }

  OnSubscribe(){
    let subScrible=new SubscribeService();
    subScrible.OnSubscribe();
  }

}
