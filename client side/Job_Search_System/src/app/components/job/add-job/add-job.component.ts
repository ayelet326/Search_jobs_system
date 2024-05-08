import { Component, OnInit } from '@angular/core';
import { Job } from '../../../models/job';
import { JobFieldService } from '../../../services/jobField.service';
import { JobField } from '../../../models/jobField';
import { Router } from '@angular/router';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.scss'
})
export class AddJobComponent implements OnInit {
  
  newJob: Job = {
    jobId: 0,
    jobName: '',
    jobFieldId: 0,
    houresScope: 0,
    area: '',
    requirements: [],
    homeWorking: false
  };
  jobFields: JobField[] = [];
  location: any;

  constructor(private jobFieldService: JobFieldService,
    private jobService: JobService
    , private router: Router) { }

  ngOnInit(): void {
    this.getJobFields();
  }
  changehomeWorking() {
    this.newJob.homeWorking = !this.newJob.homeWorking;
  }
  getJobFields(): void {
    this.jobFieldService.getJobFields()
      .subscribe((jobFields: JobField[]) => {
        this.jobFields = jobFields;
      });
  }

  async onSubmit() {
    try {
      const isJobAdded = await this.jobService.addJob(this.newJob);
      if (isJobAdded) {
        alert("The job has been successfully added!");
      } else {
        alert("Error adding job");
      }
    } catch (error: any) {
      alert(error['errorMessage']);
    }
  }

  addRequirement() {
    this.newJob.requirements.push('');
  }

  removeRequirement(index: number) {
    this.newJob.requirements.splice(index, 1);
  }
  trackByFn(index: any, item: any) {
    return index;
  }
  
}