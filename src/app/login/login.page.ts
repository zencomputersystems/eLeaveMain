import { Router } from '@angular/router';
import { AuthService } from './../projects/user/src/services/shared-service/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface UserOptions {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  public userLogin: UserOptions = { email: '', password: '' };
  public type = 'password';
  public showPass = false;
  public errorMsg;
  public errorLogin = false;
  public submitted = false;
  // crypto = require('crypto-js');
  constructor(
    private loginAuth: AuthService, private router: Router,
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('password'));
    if (localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
      this.userLogin.email = localStorage.getItem('email');
      this.userLogin.password = localStorage.getItem('password');
    }
  }

  async onLogin(loginForm: NgForm) {
    this.submitted = true;
    if (loginForm.valid) {

      console.log('onLogin loginForm: ' + JSON.stringify(loginForm, null, ' '));
      await this.loginAuth.login(this.userLogin.email, this.userLogin.password).subscribe(
        data => {
          console.log('on after login api:' + JSON.stringify(data, null, ''));
          this.errorLogin = false;
          if (data.access_token) {
            localStorage.setItem('access_token', JSON.stringify(data.access_token));
            this.router.navigate(['main']);
          }
        },
        error => {
          this.errorMsg = (error.statusText === 'Unauthorized') ? 'Invalid Credential' : error.statusText;
          this.errorLogin = true;

        }
      );
    }
  }
}
