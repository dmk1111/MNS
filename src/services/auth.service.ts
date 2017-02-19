import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
import { Observable } from 'rxjs';
import { ApiHttp } from './http/apiHttp.service';
@Injectable()
export class AuthService {
  constructor(private apiHttp: ApiHttp, private http: Http) {
  }

  setToken(response) {
    let res = response.json();
    Object.keys(res).forEach(key => {
      localStorage.setItem(key, res[key]);
    });
    localStorage.setItem('validTo', `${new Date().getTime() + res.expires_in}`);
    return res;
  }
  login(name, pass) {
    return this.http.post('http://52.34.34.95:8090/user/login', {username: name, password: pass})
      .map(res => {
          this.setToken(res);
       });
  }
  register(body) {
    return this.http.post('http://52.34.34.95:8090/user/registration', body)
      .map(this.setToken);
  }
  isLoggedIn() {
    return localStorage.getItem('access_token') !== null;
  }
  me() {
    return this.apiHttp.get('/api/user/me')
      .map(res => res.json());
  }
}

