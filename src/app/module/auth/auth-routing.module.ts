import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './auth_component/loginpage/loginpage.component';
import { SignuppageComponent } from './auth_component/signuppage/signuppage.component';
import { ForgetpageComponent } from './auth_component/forgetpage/forgetpage.component';
import { OtppageComponent } from './auth_component/otppage/otppage.component';
import { SegmentpageComponent } from './auth_component/segmentpage/segmentpage.component';

const routes: Routes = [
  {
    path:'',
    component:SegmentpageComponent
  },
  {
    path:'login',
    component:LoginpageComponent
  },
  {
    path:'signup',
    component:SignuppageComponent
  },
  {
    path:'forget',
    component:ForgetpageComponent
  },
  {
    path:'otp',
    component:OtppageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
