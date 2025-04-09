import { Component, OnInit } from '@angular/core';
import { IonCardContent, IonCol, IonToolbar, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone:false
})
export class DashboardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
