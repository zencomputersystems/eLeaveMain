import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  CryptoJS = require('crypto-js');

  public ROOT_URL = 'https://zencore.zen.com.my:3000';

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private apiService: ApiService
  ) { }

  login(emailValue: string, passwordValue: string) {
    // const encryptPass = (this.CryptoJS.SHA256(passwordValue)).toString(this.CryptoJS.enc.Hex);
    // return this.apiService.postApiLogin({ loginId: emailValue, password: encryptPass }, '/api/auth/login/local').pipe(
    console.log(emailValue)
    console.log(passwordValue)
    return this.apiService.postApiLogin({ email: emailValue, password: passwordValue }, '/api/auth/login').pipe(
      map(data => {
        return data;
      })
    );
  }
}
