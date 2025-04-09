import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectpage',
  templateUrl: './subjectpage.component.html',
  styleUrls: ['./subjectpage.component.scss'],
  standalone: false
})
export class SubjectpageComponent  implements OnInit {

  constructor(private myroute:Router) { }
  subjects = [
    'Math',
    'Chemistry',
    'Physics',
    'Biology',
    'Polity',
    'Geography',
    'History',
    'GK',
    'Geography'
  ];

next()
{
  console.log('next button is clicked and navigate to homepage')
  this.myroute.navigate(['./home'])
}

  ngOnInit() {}

}
