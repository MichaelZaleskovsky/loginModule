import { Component, OnInit } from '@angular/core';
import {User} from '../../../data/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../login.common.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  // .+@.+\..+
  emailFocus = false;
  passwordFocus = false;
  firstNameFocus = false;
  secondNameFocus = false;

  wrongPassword = false;
  serverError = false;

  regForm: FormGroup;


  constructor(private router: Router) {
    this.user  = new User();
  }

  ngOnInit() {
    this.regForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern('.+@.+\\..+')
        ]),
        password: new FormControl("", [
          Validators.required,
          Validators.pattern('(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}')
        ]),
        firstName: new FormControl("", [
          Validators.required
        ]),
        secondName: new FormControl("", [
          Validators.required
        ])
      }
    )
  }

  toSmall(formControl, focus): string {
    return focus || formControl.dirty ? 'small-label' : 'big-label';
  }

  onSubmit(form) {

    this.router.navigateByUrl('/login')
  }
}
