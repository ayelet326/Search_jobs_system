import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, catchError, of, tap, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    userUpdated = new Subject<User>();
    user!: User;
    constructor(private http: HttpClient) { }

    getUserByNameAndPassword(userName: string, password: string): Observable<User | null> {
        return this.http.get<User>(`https://localhost:7107/User/Login?userName=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`)
            .pipe(
                catchError(error => {
                    if (error.status === 404) {
                        return of(null);
                    }
                    else{
                    return throwError(error);
                    }
                })
            );
    }

    addUser(user: User) {
        this.http.post('https://localhost:7107/User', { body: user }).subscribe(res => { });
    }

    updateUser(user:User){
        this.http.put('https://localhost:7107/User', user).subscribe(res => { });
        localStorage.setItem("Current-user", JSON.stringify(user));
        this.userUpdated.next(user);
    }   
    addJob(idJob:number ){
        this.user = JSON.parse(localStorage.getItem("Current-user") || '{}');
        this.user.cVsSentCount += 1;
        console.log(this.user.idJobsCvsSent);
        
        this.user.idJobsCvsSent.push(idJob);
        this.updateUser(this.user);
    }
}
