import { Component, Input, OnInit } from '@angular/core';
import { JobFieldService } from '../../../services/jobField.service';
import { UserService } from '../../../services/user.service';
import { Job } from '../../../models/job';
import { JobField } from '../../../models/jobField';

@Component({
  selector: 'app-show-job',
  templateUrl: './show-job.component.html',
  styleUrl: './show-job.component.scss'
})
export class ShowJobComponent implements OnInit {
  @Input() job: Job | undefined;
  jobFieldName?: string;
  showDetails: boolean = false;

  constructor(private jobFieldService: JobFieldService, private userService: UserService) { }

  ngOnInit() {
    if (this.job?.jobFieldId) {
      this.jobFieldService.getJobFieldById(this.job.jobFieldId).subscribe((jobField: JobField | undefined) => {
        this.jobFieldName = jobField?.jobFieldName;
      });
    }
  }
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
  SentCV(jobId:number  ):void {
    this.userService.addJob(jobId);
    alert("CV sent successfuly");
  }
}