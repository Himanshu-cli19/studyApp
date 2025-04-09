import { Component, OnInit } from '@angular/core';
import { IonContent, IonLabel, IonInput, IonCardTitle, IonButton } from "@ionic/angular/standalone";
import { FormGroup ,ReactiveFormsModule,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  standalone:false
})
export class LoginpageComponent  {

  constructor( private myroute:Router) {}

     loginForm =new FormGroup({

    username:new FormControl(''),
    password:new FormControl('')
  });

 

  onlogin()
    {
      console.log(this.loginForm.value)
      if(this.loginForm.controls.username.value==''||this.loginForm.controls.password.value=='' )
      {
        alert('required fields are empty!!')
        
      }
      if(this.loginForm.controls.username.value=='admin@123'||this.loginForm.controls.password.value=='123' )
      {this.myroute.navigate(['/home'])}
        
      else{
        alert('invalid email and password')
      }
    }   

 

  onSignup() {
    console.log('Navigate to signup');
    {this.myroute.navigate(['/auth/signup'])}
  }

  onForgotPassword() {
    console.log('Forgot password clicked');
    {this.myroute.navigate(['/auth/forget'])}
  }
  onFacebookSignup() {
    console.log('Facebook signup clicked');
    
  }
  
  onGoogleSignup() {
    console.log('Google signup clicked');
   
  }


}
