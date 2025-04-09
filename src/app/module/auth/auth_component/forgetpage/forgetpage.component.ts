import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpage',
  templateUrl: './forgetpage.component.html',
  styleUrls: ['./forgetpage.component.scss'],
  standalone:false
})
export class ForgetpageComponent  implements OnInit {

  constructor( private myroute:Router){}


forgotForm = new FormGroup({

  email:new FormControl('')
})

onSendCode()
{

  if(this.forgotForm.controls.email.value=='')
    {
      alert('please enter a valid email')
    }

  if(this.forgotForm.controls.email.value=='admin@123')
  {
    this.myroute.navigate(['./auth/otp'])
  }
  else{
      alert('please enter an email')
    }
}
 ngOnInit(): void {
   
 }

 

  // forgotForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.forgotForm = this.fb.group({
  //     email: ['', [Validators.required, Validators.email]],
  //   });
  // }

  // onSendCode() {
  //   if (this.forgotForm.valid) {
  //     const email = this.forgotForm.value.email;
  //     console.log('Code will be sent to:', email);

  //     // 🔁 Simulate sending email - replace with real API
  //     // this.authService.sendResetCode(email).subscribe(...)
  //   } else {
  //     console.log('Invalid email input');
  //   }
  

 

}
