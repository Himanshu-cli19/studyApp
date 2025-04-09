import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.scss'],
  standalone: false,
})
export class AccountpageComponent  implements OnInit {

  constructor() { }
  user = {
    name: 'Admin',
    email: 'admin@123.com',
    grade: 'Angular Developer'
  };

  profileImage: string | null = null;

  changePhoto() {
   
    alert('Photo change feature coming soon!');
  }

  ngOnInit() {}

}
