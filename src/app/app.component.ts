import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpRequestService} from './services/http-request.service';
import {IsLoginService} from './services/is-login.service';
import {User} from "./data/User";
import {storedName} from "./data/storedName";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private router: Router,
              private request: HttpRequestService,
              private isLogin: IsLoginService) {}

  ngOnInit() {
    if (!this.isLogin.canActivate(null, null)){
      let storedUser = localStorage.getItem(storedName);
      if (storedUser != null){
        let user: User = JSON.parse(storedUser);


        let serverUser: User = user;
        this.isLogin.setLogin();
        this.isLogin.setUser(serverUser);


        this.request.login(user.email, user.password).subscribe(
          res => {
            if (res['error'] == null) {
              let serverUser: User = res['user'];
              this.isLogin.setLogin();
              this.isLogin.setUser(serverUser);
            }
          }
        )
      }
    }
    this.router.navigateByUrl('/start');
  }



}
