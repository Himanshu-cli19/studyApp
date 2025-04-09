import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss'],
  standalone: false,
  
})
export class PractiseComponent  implements OnInit {

  constructor() { }

  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    freeMode: true
  };
  

  ngOnInit() {}

}
