import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WindowService } from './common/window.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'firebase-demo';

  phoneNumber:any;
  otp:any;
  windowRef:any;
  user:any;

  constructor(private windowService:WindowService ){
    
  }

  ngOnInit(){
    this.windowRef=this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('captcha-container')
    this.windowRef.recaptchaVerifier.render()
    
  }

  

  sendOtp()
  {
    const appVerifier=this.windowRef.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber('+91'+ this.phoneNumber,appVerifier)
    .then(result =>{
      this.windowRef.confirmationResult=result;
    })
    .catch(error => console.log(error));
  }

  verifyOtp()
  {
    this.windowRef.confirmationResult
                  .confirm(this.otp)
                  .then(result =>{
                    this.user=result.user;
                    console.log(this.user)
                  })
                  .catch( error =>console.log(error, 'Incorrect code entered'))
  }
}
