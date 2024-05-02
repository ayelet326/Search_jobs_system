import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
         this.GetUsers();
    }

    UserList: User[] = []

    public GetUserList(): Observable<User[]> {
        return this.GetUsers().pipe(
            tap((res: any) => {
                this.UserList = res; 
            })
        );
    }
    
    GetUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://localhost:7107/User');
    }
    

    

    addUser(user: User) {
        this.UserList.push(user)
        this.http.post('https://localhost:7107/User', { body: user }).subscribe(res => { })
    }


}
