import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  
})
export class HomePage {

  constructor(private myrouter: Router) {}

  test()
  {
    this.myrouter.navigate(['./home/test'])
  }
  home()
  {
    this.myrouter.navigate(['./home/home'])
  }
  account()
  {
    this.myrouter.navigate(['./home/account'])
  }
  search()
  {
    this.myrouter.navigate(['./home/search'])
  }


  handleRefresh(event: CustomEvent) {
    setTimeout(() => {
      // Any calls to load data go here
      (event.target as HTMLIonRefresherElement).complete();
    }, 2000);
  }


selclass()
{
this.myrouter.navigate(['./home/class'])
}

subject()
{
  this.myrouter.navigate(['./home/subject'])
}
profile()
{
  this.myrouter.navigate(['./home/profile'])
}
}
