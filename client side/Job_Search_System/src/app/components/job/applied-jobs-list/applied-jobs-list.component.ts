import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { JobField } from '../../../models/jobField';
import { JobFieldService } from '../../../services/jobField.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Job } from '../../../models/job';
import { JobService } from '../../../services/job.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applied-jobs-list',
  templateUrl: './applied-jobs-list.component.html',
  styleUrl: './applied-jobs-list.component.scss'
})
export class AppliedJobsListComponent  implements OnInit {
  currentUser!: User;
  idJobsCvsSent: number[] = [];
  jobs: Job[] = [];
  jobFieldName:string=" ";

  constructor(
    private jobService: JobService,
    private userService: UserService,
    private jobFieldService: JobFieldService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currentUser=JSON.parse(localStorage.getItem("Current-user")??'{ }');
    this.updateUser(this.currentUser);

    this.userService.userUpdated.subscribe((updatedUser: User) => {
      this.updateUser(updatedUser);
    });
  }

  private updateUser(updatedUser: User): void {    
    this.currentUser = updatedUser;
    this.idJobsCvsSent = this.currentUser.idJobsCvsSent || [];
    this.loadJobs();
  }

  private loadJobs(): void {
    if (this.idJobsCvsSent.length === 0) {
      this.jobs = [];
      return;
    }

    const promises = this.idJobsCvsSent.map(idJob =>
      this.jobService.getJobByIdJobs(idJob)
    );

    Promise.all(promises)
      .then(jobs => {
        this.jobs = jobs.filter(job => job !== undefined) as Job[];
      })
      .catch(error => {
        console.error('Error loading jobs:', error);
      });
  }

  getJobFieldName(jobFieldId: number): Observable<string | undefined> {
    return new Observable<string | undefined>((observer) => {
        this.jobFieldService.getJobFieldById(jobFieldId).subscribe((jobField: JobField | undefined) => {
            if (jobField) {
                observer.next(jobField.jobFieldName);
                observer.complete();
            } else {
                observer.next(undefined);
                observer.complete();
            }
        });
    });
}

}

