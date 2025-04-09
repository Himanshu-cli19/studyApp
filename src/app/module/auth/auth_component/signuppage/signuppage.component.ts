import { Component, OnInit } from '@angular/core';

import { FormGroup ,ReactiveFormsModule,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss'],
  standalone:false
})
export class SignuppageComponent  implements OnInit {

  constructor( private myroute:Router) { }

  signupForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSignup()
  {  console.log(this.signupForm.value);
     if(this.signupForm.controls.username.value==('admin')||this.signupForm.controls.username.value==('admin@123')||this.signupForm.controls.username.value==('123'))
      this.myroute.navigate(['./home'])
    // else{
    //   alert('The input fields are incorrect')
    // }
  }
  onLogin() {
    console.log('Navigate to login');
    {this.myroute.navigate(['/'])}
  }
  
  onFacebookSignup() {
    console.log('Facebook signup clicked');
    
  }
  
  onGoogleSignup() {
    console.log('Google signup clicked');
   
  }


  ngOnInit() {}

}
