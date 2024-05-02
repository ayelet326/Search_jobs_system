import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/User';


@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {
        this.GetUsers();
    }

    UserList: User[] = []

    public GetUserList() {
        return this.UserList
    }

    GetUsers() {
        this.http.get('https://localhost:7231/User').subscribe((res: any) => this.UserList = res)
    }

    addUser(user: User) {
        this.UserList.push(user)
        this.http.post('https://localhost:7231/User', { body: user }).subscribe(res => { })
    }


}
