import { Component, OnInit } from '@angular/core';
import {IsLoginService} from "../../services/is-login.service";
import {Router} from "@angular/router";
import {storedName} from "../../data/storedName";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private isLogin: IsLoginService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  logout() {
    this.isLogin.logOut();
    localStorage.removeItem(storedName);
    this.router.navigateByUrl('/login');
  }

}
