import { Component, OnInit } from '@angular/core';
// import { IonContent, IonLabel, IonInput, IonCardTitle, IonButton } from "@ionic/angular/standalone";
import { FormGroup ,ReactiveFormsModule,FormControl, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/Service/userservice.service';
import { Logininterface } from 'src/Interfaces/logininterface';



@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss'],
  standalone:false
})
export class LoginpageComponent implements OnInit  {
  loginForm !: FormGroup

  constructor( private myroute:Router, private _formbulder: FormBuilder, private myservice:UserserviceService) {}

  ngOnInit(): void {
    this.loginForm = this._formbulder.group({

      username:[''],
      password:['']
    });
  
  }


  onlogin()
    {
      // try{
      console.log(this.loginForm.value);
      const data:Logininterface = {
        userid:this.loginForm.get('username')?.value || '',
        password:this.loginForm.get('password')?.value || ''
      };
      
      this.myservice.loginapi(data).subscribe((res: any)=>{ 

        if(res.status=== true)
        {
          console.log('login done', res);
         
       
        }
        else (res.status === false) 
        {
          console.log('failed')
        }
        
      })
        

   
      
    }   

    

 

  // onSignup() {
  //   console.log('Navigate to signup');
  //   {this.myroute.navigate(['/auth/signup'])}
  // }

  onForgotPassword() {
    console.log('Forgot password clicked');
    {this.myroute.navigate(['/auth/forget'])}
  }
  onFacebookSignup() {
    console.log('Facebook signup clicked');
    
  }
  
  onGoogleSignup() {
    console.log('Google signup clicked');
   
  }


}


