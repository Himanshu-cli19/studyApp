import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginpageComponent } from './auth_component/loginpage/loginpage.component';
import { IonicModule } from '@ionic/angular';
import { ForgetpageComponent } from './auth_component/forgetpage/forgetpage.component';
import { OtppageComponent } from './auth_component/otppage/otppage.component';
import { SignuppageComponent } from './auth_component/signuppage/signuppage.component';
import { SegmentpageComponent } from './auth_component/segmentpage/segmentpage.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    ForgetpageComponent,
    OtppageComponent,
    SignuppageComponent,
    SegmentpageComponent

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule



  ]
})
export class AuthModule { }
