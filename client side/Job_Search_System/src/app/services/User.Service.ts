import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable, catchError, of, tap, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {}


    
    GetUserByNameAndPassword(userName:string,userPassword:string): Observable<User | null> {
        return this.http.get<User>(`https://localhost:7107/User/Login?name=${encodeURIComponent(userName)}&password=${encodeURIComponent(userPassword)}`)
        .pipe(
            catchError(error => {
                if (error.status === 404) {
                    return of(null);
                }
                return throwError(error);
            })
        );;
    }
    

    

    AddUser(user: User) {
        this.http.post('https://localhost:7107/User', { body: user }).subscribe(res => { })
    }


}
