import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private userService: UserService) { }

    async Login(username: string, password: string): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        let flag = false;
        this.userService.getUserByNameAndPassword(username, password).subscribe((user: User | null) => {
          if (user !== null) {
            localStorage.setItem("Current-user", JSON.stringify(user));
            flag = true;
          }
          resolve(flag);
        });
      });
    }
  }


