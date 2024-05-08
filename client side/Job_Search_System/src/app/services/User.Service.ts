import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, catchError, map, of, tap, throwError } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    userUpdated = new Subject<User>();
    user!: User;
    constructor(private http: HttpClient) { }

    getUserByNameAndPassword(userName: string, password: string): Observable<User | null> {
        return this.http.get<User>(`https://localhost:7107/User/Login?name=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`)
            .pipe(
                catchError(error => {
                    if (error.status === 404) {
                        return of(null);
                    }
                    else {
                        return throwError(error);
                    }
                })
            );
    }

    getUserById(id: number) : Observable<User | null>{
        return this.http.get<User>(`https://localhost:7107/User/${encodeURIComponent(id)}`).pipe(
            catchError(error => {
                if (error.status === 404) {
                    return of(null);
                }
                else {
                    return throwError(error);
                }
            })
        );
    }

    addUser(user: User): Observable<any> {
        if (user !== null) {
            return this.http.post('https://localhost:7107/User', user).pipe(
                map(() => true),
                catchError(error => of(error))
            );
        }
        return of(false);
    }

    updateUser(user: User) {
        this.http.put('https://localhost:7107/User', user).subscribe(res => { });
        localStorage.setItem("Current-user", JSON.stringify(user));
        this.userUpdated.next(user);
    }
    addJob(idJob: number): boolean {
        console.log("in add job");

        this.user = JSON.parse(localStorage.getItem("Current-user") || '{}');
        const ifExist = this.user.idJobsCvsSent.find(id => id === idJob);
        if (ifExist) {
            alert("You sent Cvs to this Job.")
            return false;
        }
        else {
            this.user.cVsSentCount += 1;
            this.user.idJobsCvsSent.push(idJob);
            this.updateUser(this.user);
            return true;
        }

    }
}
