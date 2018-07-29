import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {User} from "../data/User";

@Injectable({
  providedIn: 'root'
})
export class IsLoginService implements CanActivate {
  private login = false;
  private user: User;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login) { return true; }
    this.router.navigateByUrl('/login');
    return false;
  }

  setLogin() {
    this.login = true;
  }

  logOut() {
    this.login = false;
  }

  getUser(): User {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }
}

