import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.scss'],
  standalone:false
})
export class OtppageComponent 
  {
    constructor( private myroute:Router) { }
  // constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.otpForm = this.fb.group({
//       d1: ['', [Validators.required, Validators.pattern('[0-9]')]],
//       d2: ['', [Validators.required, Validators.pattern('[0-9]')]],
//       d3: ['', [Validators.required, Validators.pattern('[0-9]')]],
//       d4: ['', [Validators.required, Validators.pattern('[0-9]')]],
//     });
// }

// onOtpChange(event: any, index: number) {
 
  // const input = event.target;
  // const next = this.otpInputs.toArray()[index + 1];
  // const prev = this.otpInputs.toArray()[index - 1];

  // if (input.value.length === 1 && next) {
  //   next.nativeElement.focus();
  // } else if (input.value.length === 0 && prev) {
  //   prev.nativeElement.focus();
  // }


// onSubmitOtp() {
//   if (this.otpForm.valid) {
//     const otp = Object.values(this.otpForm.value).join('');
//     console.log('Entered OTP:', otp);
//     // TODO: Verify OTP with backend
//   } else {
//     console.log('OTP form is invalid');
//   }
// }
 submit()
 {
  this.myroute.navigate(['./home'])
 }

}
