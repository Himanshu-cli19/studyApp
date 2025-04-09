import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classpage',
  templateUrl: './classpage.component.html',
  styleUrls: ['./classpage.component.scss'],
  standalone:false
})
export class ClasspageComponent  {

  constructor(private myroute:Router) { }

  cards = Array.from({ length: 13 }, (_, i) => ({
    title: `Class ${i + 1}`,
    selected: false
  }));


  selectOnlyOne(index: number) {
    this.cards.forEach((card, i) => {
      card.selected = i === index;
    });
}

letsgo()
{
  console.log('letsgo naviaget to homepage')
  this.myroute.navigate(['./home'])
}
}