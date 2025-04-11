import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';
import { CrudService } from '../service/crud.service';
import { DeviceCheckedService } from '../service/device-checked.service';
import { userLoginResponseData } from '../interface-panel/auth-interface/logindata.interface';
import { userProfileResponseData } from '../interface-panel/user-interface/userprofile.interface';
import { PushNotifications, Token } from '@capacitor/push-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  showPassword = false;
  isDeviceChecked: boolean = false;
  deviceToken: string = '';

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _shared: SharedService,
    private _crud: CrudService,
    private _deviceChecked: DeviceCheckedService

  ) {
    this.initializePushNotifications()
    localStorage.removeItem('userData')
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // for user login 
  login() {
    if (this.loginForm.valid) {
      try {
        const fromdadata = new FormData()
        fromdadata.append('Userid', this.loginForm.get('username')?.value.trim().replace(/\s+/g, '')),
          fromdadata.append('Password', this.loginForm.get('password')?.value.trim().replace(/\s+/g, '')),
          fromdadata.append('TokenId', this.deviceToken),

          this._crud.login(fromdadata).subscribe(
            (res: userLoginResponseData) => {
              if (res.status === true) {
                console.log(res);
                this.getUserData(res.data.UserId)
              } else if (res.status === false) {
                this._shared.ToastWarning(res.message)
              }

            }, (error: userLoginResponseData) => {
              this._shared.ToastWarning('Username or password is incorrect.')
              console.log('Error', error);
            }
          )
      } catch (error) {
        this._shared.ToastWarning('An error occurred during login. Please try again.');
        console.error('Error', error);
      }

    } else {
      this._shared.ToastWarning('Please fill the required fields')
    }

  }


  async getUserData(id: number) {
    try {
      const res = await this._crud.get_profile(id).toPromise() as userProfileResponseData;
      this._shared.setUserData(res);

      this.isDeviceChecked = await this._deviceChecked.deviceChecked();
      if (this.isDeviceChecked) {
        this.loginForm.reset();
        this._shared.ToastSuccess('Login Successfully...');
        this._router.navigate(['/home/dashboard']);
        this.bannerExpire();
      }
    } catch (error) {
      console.error('Error fetching user data', error);
      this._shared.ToastWarning('An error occurred while fetching user data.');
    }
  }

  bannerExpire() {
    this._crud.bannerExpire().subscribe((res: any) => {
      console.log(res);
    });

  }



  // Initialize Push Notifications for Android
  initializePushNotifications() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        console.log('Permission not granted for push notifications');
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      this.deviceToken = token?.value;
    });

    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('Received push notification:' + notification);
    });
  }

}