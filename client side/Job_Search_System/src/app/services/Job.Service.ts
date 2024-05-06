import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Job } from '../models/job';
import { Observable, tap } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class JobService {
    private jobsUrl = 'https://localhost:7107/Job';
    jobList: Job[] = []

    constructor(private http: HttpClient) {}

    public getJobList(): Observable<Job[]> {
        if (this.jobList.length === 0) {
            return this.getJobsFromServer();
        } else {
            return new Observable(observer => {
                observer.next(this.jobList);
                observer.complete();
            });
        }
    }

    getJobsFromServer(): Observable<Job[]> {
        return this.http.get<Job[]>(this.jobsUrl).pipe(
            tap(jobs => this.jobList = jobs)
        );
    }

    addJob(job: Job): Observable<any> {
        this.jobList.push(job)
        return this.http.post(this.jobsUrl, job);
    }
}
