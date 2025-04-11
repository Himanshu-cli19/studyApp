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
  items = [
    {
      title: 'Card 1',
      image: 'https://via.placeholder.com/200x150',
      description: 'This is the first card.'
    },
    {
      title: 'Card 2',
      image: 'https://via.placeholder.com/200x150',
      description: 'This is the second card.'
    },
    {
      title: 'Card 3',
      image: 'https://via.placeholder.com/200x150',
      description: 'This is the third card.'
    },
    {
      title: 'Card 4',
      image: 'https://via.placeholder.com/200x150',
      description: 'This is the fourth card.'
    }
  ];

}
