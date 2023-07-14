import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      console.error(error);
    }
  }

  login(): void {
    this.user = {
      email: 'john@abv.bg',
      firstName: 'John',
    };

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
