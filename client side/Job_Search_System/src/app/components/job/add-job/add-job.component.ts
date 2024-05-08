import { Component, OnInit } from '@angular/core';
import { Job } from '../../../models/job';
import { JobFieldService } from '../../../services/jobField.service';
import { JobField } from '../../../models/jobField';

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
  selectedFieldId?: number;
  textBoxes: { value: string }[] = [];
  
  constructor(private jobFieldService: JobFieldService) { }
  ngOnInit(): void {
    this.getJobFields();
  }

  getJobFields(): void {
    this.jobFieldService.getJobFields()
      .subscribe((jobFields: JobField[]) => {
        this.jobFields = jobFields;
      });
  }

  onSubmit() {
    console.log(this.newJob);
  }


  addTextBox() {
    this.textBoxes.push({ value: '' });
  }

  removeTextBox(textBox: { value: string }) {
    const index = this.textBoxes.indexOf(textBox);
    if (index !== -1) {
      this.textBoxes.splice(index, 1);
    }
  }

}