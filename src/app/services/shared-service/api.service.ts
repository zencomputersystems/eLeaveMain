
import { Headers, Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public ROOT_URL = 'http://zencore.zen.com.my:3000';

  public headers = new Headers();
  constructor(
    public http: Http
  ) { }


  headerAuthorization() {
    if ((this.headers as any)._headers.size !== 1) {
      (this.headers as any).append('Authorization', 'JWT ' + JSON.parse(localStorage.getItem('access_token')));
    }
  }


  postApiLogin(data: any, address: string) {
    return this.http.post(this.ROOT_URL + address, data)
      .pipe(map((res: Response) => res.json()));
  }

}
