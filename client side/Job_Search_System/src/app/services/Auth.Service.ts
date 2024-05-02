import { Injectable } from '@angular/core';
import { UserService } from './User.Service';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private userService: UserService) { }

    async Login(username: string, password: string): Promise<boolean> {
    const user=await this.authenticate(username, password);
    if (user) {
        localStorage.setItem("Current-user", JSON.stringify(user));
        return true;
    } else {
        return false;
    }
  }

  async authenticate(username: string, password: string): Promise<User | undefined> {
    const userList = await this.userService.GetUserList();
    const user = userList.find(u => u.UserName === username && u.Password === password);
    return user; 
  }
}