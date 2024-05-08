import { Component, OnInit } from '@angular/core';
import { Job } from '../../../models/job';
import { JobService } from '../../../services/job.service';
import { JobField } from '../../../models/jobField';
import { JobFieldService } from '../../../services/jobField.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  jobFields: JobField[] = [];
  filteredJobsList: Job[] = [];
  selectedFieldId?: number;
  selectedArea?: string;

  constructor(
    private jobService: JobService,
    private jobFieldService: JobFieldService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.refreshData();
    });
  }

  refreshData() {
    this.getJobFields();
    this.getJobs();
    this.route.queryParams.subscribe(params => {
      this.selectedFieldId = this.jobFields.find(jobField => jobField.jobFieldName == params['fieldName'])?.jobFieldId;
      this.selectedArea = params['area'];
      this.filterJobs();
    });
  }
  getJobFields(): void {
    this.jobFieldService.getJobFields()
      .subscribe((jobFields: JobField[]) => {
        this.jobFields = jobFields;
      });
  }

  getJobs(): void {
    this.jobService.getJobList()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;
        this.filteredJobsList = jobs;
      });
  }

  onSearch(): void {
    if ((this.selectedFieldId !== undefined && this.selectedFieldId?.toString() !== "") || this.selectedArea) {
      this.filterJobs();
      this.router.navigate(['/home'], { queryParams: { fieldName: this.jobFields.find((jobField: { jobFieldId: number | undefined; }) => jobField.jobFieldId == this.selectedFieldId)?.jobFieldName, area: this.selectedArea } });
    }
  }

  filterJobs(): void {
    if (this.selectedFieldId) {
      this.filteredJobsList = this.jobs.filter(job => job.jobFieldId == this.selectedFieldId);
    }
    if (this.selectedArea) {
      this.filteredJobsList = this.filteredJobsList.filter(job => job.area.toLowerCase().includes(this.selectedArea!.toLowerCase()));
    }
  }
}
