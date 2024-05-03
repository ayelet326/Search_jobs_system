import { Injectable } from '@angular/core';
import { UserService } from './User.Service';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private userService: UserService) { }

    async Login(username: string, password: string): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        let flag = false;
        this.userService.GetUserByNameAndPassword(username, password).subscribe((user: User | null) => {
          if (user !== null) {
            localStorage.setItem("Current-user", JSON.stringify(user));
            flag = true;
          }
          resolve(flag);
        });
      });
    }
  }
  

  // async authenticate(username: string, password: string): Promise<User|undefined> {
  //   let Myuser:User|undefined=undefined; 
  //   await this.userService.GetUserByNameAndPassword(username,password).subscribe((user: User | null) => {
  //     if (user !== null) {
  //       Myuser=user;
  //     }

  //   });
  //   console.log(Myuser);
    
  //   return Myuser; 
  // }


