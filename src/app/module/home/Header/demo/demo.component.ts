import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone:false,
})
export class DemoComponent  implements OnInit {

  constructor() { }
  isExpanded = false;

toggleCard() {
  this.isExpanded = !this.isExpanded;
}

  ngOnInit() {}

}
