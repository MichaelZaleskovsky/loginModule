import { Component, OnInit } from '@angular/core';
import {HttpRequestService} from "../../../services/http-request.service";
import {IsLoginService} from "../../../services/is-login.service";
import {Router} from "@angular/router";
import {User} from "../../../data/User";
import {storedName} from "../../../data/storedName";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../login.common.css']
})
export class LoginComponent implements OnInit {
  keepMarker = false;
  user: User = new User();
  emailFocus = false;
  passwordFocus = false;

  wrongPassword: boolean = false;
  serverError: boolean = false;

  loginForm: FormGroup;

  constructor(private request: HttpRequestService,
              private isLogin: IsLoginService,
              private router: Router) {}

  toggleKeep() {
    console.log("TOGGLE WORK");
    this.keepMarker = !this.keepMarker;
  }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl("", [
          Validators.required,
          Validators.pattern('(.+@.+\\..+)')
        ]),
        password: new FormControl("", [
          Validators.required
        ])
      }
    )
  }

  toSmall(formControl, focus): string {
    return focus || formControl.dirty ? 'small-label' : 'big-label';
  }

  onSignIn(loginForm) {
    console.log(loginForm);

    this.request.login(loginForm.value.email, loginForm.value.password).subscribe(
      res => {
        console.log("REQUEST RESULT");
        console.log(res);

        res['error'] = null;

        if (res['error'] == null) {
          let user: User = res['user'];
          this.isLogin.setLogin();
          this.isLogin.setUser(user);
          if (this.keepMarker) {this.storeLocal(user)}
          this.router.navigateByUrl('/start')
        } else {
          this.wrongPassword = true;
        }
      },
      err => {
//        this.serverError = true;

        let user: User = new User();
        user.email = loginForm.value.email;
        user.profile = {first_name: 'Маша',
                        last_name: 'Medved'};
        this.isLogin.setLogin();
        this.isLogin.setUser(user);
        if (this.keepMarker) {this.storeLocal(user)}
        this.router.navigateByUrl('/start')

      }
    )
  }

  storeLocal(user: User) {
    localStorage.setItem(storedName, JSON.stringify(user));
  }

  forgetPassword() {
    this.isLogin.setUser(this.user);
    this.router.navigateByUrl('/restore');
  }

  registerUser() {
    this.isLogin.setUser(this.user);
    this.router.navigateByUrl('/register');
  }
}
