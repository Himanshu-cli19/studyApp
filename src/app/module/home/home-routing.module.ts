import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardComponent } from './home_component/dashboard/dashboard.component';
import { TestpageComponent } from './home_component/testpage/testpage.component';
import { AccountpageComponent } from './home_component/accountpage/accountpage.component';
import { SearchpageComponent } from './home_component/searchpage/searchpage.component';
import { PractiseComponent } from './home_component/practise/practise.component';
import { ClasspageComponent } from './Header/classpage/classpage.component';
import { SubjectpageComponent } from './Header/subjectpage/subjectpage.component';
import { ProfileComponent } from './Header/profile/profile.component';

const routes: Routes = [
  {path:'', component:HomePage,
    children:[
      {path:'',component:DashboardComponent},
      {path:'home',component:DashboardComponent},
      {path:'test',component:TestpageComponent},
      {path:'account',component:AccountpageComponent},
      {path:'search',component:SearchpageComponent},
      {path:'practice',component:PractiseComponent},
      ]},
  {path:'class',  component:ClasspageComponent},
  {path:'subject', component:SubjectpageComponent},
  {path:'profile',component:ProfileComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
