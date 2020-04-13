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
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('password'));
    if (localStorage.getItem('email') !== null && localStorage.getItem('password') !== null) {
      this.userLogin.email = localStorage.getItem('email');
      this.userLogin.password = localStorage.getItem('password');
    }
  }

}
