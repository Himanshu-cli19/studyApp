import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';





import { HomePageRoutingModule } from './home-routing.module';
import { DashboardComponent } from "./home_component/dashboard/dashboard.component";
import { Router, RouterOutlet } from '@angular/router';
import { TestpageComponent } from './home_component/testpage/testpage.component';
import { SearchpageComponent } from './home_component/searchpage/searchpage.component';
import { AccountpageComponent } from './home_component/accountpage/accountpage.component';
import { PractiseComponent } from './home_component/practise/practise.component';
import { ClasspageComponent } from './Header/classpage/classpage.component';
import { SubjectpageComponent } from './Header/subjectpage/subjectpage.component';
import { ProfileComponent } from './Header/profile/profile.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterOutlet,
    
    
    
  
    
],
  declarations: [HomePage, DashboardComponent,TestpageComponent,SearchpageComponent,
    AccountpageComponent,PractiseComponent,ClasspageComponent,SubjectpageComponent,
  ProfileComponent]
})
export class HomePageModule {}
