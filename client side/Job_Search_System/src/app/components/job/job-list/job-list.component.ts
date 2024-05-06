import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Job } from '../../../models/job';
import { JobService } from '../../../services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  jobs: Job[] | undefined;
  @Input() jobFieldId?: number;
  @Input() jobArea?: string;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getJobs();
    if (changes['jobFieldId'] || changes['jobArea']) {
      this.filterJobs();
    }
  }


  getJobs(): void {
    this.jobService.getJobList()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;
        this.filterJobs();
      });
  }

  filterJobs(): void {
    if (this.jobFieldId) {
      this.jobs = this.jobs?.filter(job => job.jobFieldId == this.jobFieldId);
    }
    if (this.jobArea) {
      this.jobs = this.jobs?.filter(job => job.area.toLowerCase().includes(this.jobArea!.toLowerCase()));
    }
  }
}
