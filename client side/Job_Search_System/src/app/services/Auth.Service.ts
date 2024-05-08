import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  user: User = {
    userId: 0,
    userName: '',
    password: '',
    jobFieldId: 0,
    cVsSentCount: 0,
    idJobsCvsSent: []
  };

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

    async signUp(username: string, password: string, jobFieldId: number): Promise<boolean> {
      this.user.userName = username;
      this.user.password = password;
      this.user.jobFieldId = jobFieldId;
      return new Promise<boolean>((resolve, reject) => {
        this.userService.addUser(this.user).subscribe(
          (res: any) => {
            if (res === true) {
              resolve(true);
            } else if (res === false) {
              resolve(false);
            }
            else {
              reject(res.error);
            }
          },
          (error: any) => {
            reject(error);
          }
        );
      });
    }
  }

