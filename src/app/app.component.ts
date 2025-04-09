import { Component } from '@angular/core';
// -to hide the status bar
import { Platform } from '@ionic/angular';
import { StatusBar } from '@capacitor/status-bar';
// -------------


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  // -to hide the status bar
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.platform.ready();
    await StatusBar.hide();
  }
// -------------------
  
}
