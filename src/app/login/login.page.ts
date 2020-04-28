import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../services/shared-service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private auth: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  onLogin() {
    console.log('onlogin');
    this.spinner.show();
    this.auth.login('tarmimi@zen.com.my', 'UEBzczEyMzQ=').subscribe( data => {
        console.log('data:' + JSON.stringify(data, null, ' '));

      }
    )

  }

}
