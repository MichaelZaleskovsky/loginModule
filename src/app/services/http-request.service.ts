import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    let url = 'http://globalbit.co.il/front-end-assignment/login.php';
    let body = {
      email: email,
      password: password
    };
    return this.http.post(url, body);
  }

  restore(email) {
    let url = 'http://globalbit.co.il/front-end-assignment/forgot-password.php';
    return this.http.post(url, {email: email});
  }


}
