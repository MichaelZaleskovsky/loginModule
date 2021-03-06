import { Component, OnInit } from '@angular/core';
import {IsLoginService} from '../../../services/is-login.service';
import {Router} from '@angular/router';
import {HttpRequestService} from '../../../services/http-request.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.component.html',
  styleUrls: ['./restore.component.css', '../../login.common.css']
})
export class RestoreComponent implements OnInit {
  email: string;
  sendingMsg = false;
  wrongEmail = false;
  restoreForm: FormGroup;
  emailFocus = false;

  constructor(private isLogin: IsLoginService,
              private router: Router,
              private request: HttpRequestService)
  { }

  ngOnInit() {
    console.log(this.isLogin.getUser());
    this.restoreForm = new FormGroup(
      {
        email: new FormControl(this.isLogin.getUser().email, [
          Validators.required,
          Validators.pattern('.+@.+\\..+')
        ])
      }
    )

  }

  sendRestore() {
    this.sendingMsg = true;
    this.request.restore(this.email).subscribe(
      res => {this.delay()},
      err => {this.delay()}
    );
  }

  delay() {
    setTimeout(() => this.router.navigateByUrl('/login'), 2000);
  }

  toSmall(formControl, focus): string {
    return this.isLogin.getUser().email || focus || formControl.dirty ? 'small-label' : 'big-label';
  }
}
