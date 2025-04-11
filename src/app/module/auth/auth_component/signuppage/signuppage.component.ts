import { Component, OnInit } from '@angular/core';

import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/Service/userservice.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.scss'],
  standalone: false
})
export class SignuppageComponent implements OnInit {
  signupForm !: FormGroup

  constructor(private myroute: Router, private myservice: UserserviceService,

    private _formbuilder:FormBuilder,
  ) { }

  statevar: any[] = [];
  cityvar: any[] = [];





  ngOnInit(): void {
    this.signupForm = this._formbuilder.group({
      vakilid: [0],
      clientname: [''],
      email:['',],
      password:[''],
      state:[''],
      city:[''],
      address:[''],
      contactnumber:[''],
      gender:['']

})
    this.state();
  }

  onSignup() {
    console.log(this.signupForm.value.clientname);

    console.log("data aaa ", this.signupForm.get('clientname')?.value);
   
    

    const formData = new FormData();

    formData.append('vakilId', this.signupForm.get('vakilId')?.value || 0);
    formData.append('clientName', this.signupForm.get('clientname')?.value || '');
    formData.append('email', this.signupForm.get('email')?.value || '');
    formData.append('password', this.signupForm.get('password')?.value || '');
    formData.append('state', this.signupForm.get('state')?.value || '');
    formData.append('city', this.signupForm.get('city')?.value || '');
    formData.append('address', this.signupForm.get('address')?.value || '');
    formData.append('contactNum', this.signupForm.get('contactnumber')?.value || '');
    formData.append('gender', this.signupForm.get('gender')?.value || '');

 
    this.myservice.ClientRegister(formData).subscribe((res: any) => {
      console.log("result ",res);

    })
  }
  onLogin() {
    console.log('Navigate to login');
    { this.myroute.navigate(['/']) }
  }

  onFacebookSignup() {
    console.log('Facebook signup clicked');

  }

  onGoogleSignup() {
    console.log('Google signup clicked');

  }


  // -----------Service----------
  state() {
    this.myservice.statelistapi().subscribe((res: any) => {
      console.log("res aaya ", res);
      this.statevar = res.data;

    })
  }
  getCity(event: any) {
    const cityId = event?.detail.value
    console.log(cityId, 'city');

    this.myservice.citylistapi(cityId).subscribe((res: any) => {
      this.cityvar = res.data;
      console.log(this.cityvar);

    })
  }



}
