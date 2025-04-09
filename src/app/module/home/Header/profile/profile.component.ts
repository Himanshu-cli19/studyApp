import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone:false
})
export class ProfileComponent  implements OnInit {

  constructor( private myrouter:Router) { }
  student = {
    name: 'Admin',
    class: 'Class 10',
    email: 'admin@123',
    phone: '91 9999 9999 99',
    dob: '01 Jan 2000',
    address: '123 Main Street'
  };

  goBack() {
    this.myrouter.navigate(['./home']);
  }

  ngOnInit() {}

}
