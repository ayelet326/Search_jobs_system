import { Component, OnInit } from '@angular/core';
import { JobField } from '../../models/jobField';
import { JobFieldService } from '../../services/jobField.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  jobFields: JobField[] = [];
  selectedFieldId?: number;
  selectedArea?: string;
  jobFieldId?: number;
  jobArea?: string;

  constructor(private jobFieldService: JobFieldService) { }

  ngOnInit() {
    this.getJobFields();

  }

  getJobFields(): void {
    this.jobFieldService.getJobFields()
      .subscribe((jobFields: JobField[]) => {
        this.jobFields = jobFields;
      });
  }

  onSearch(): void {
    if ((this.selectedFieldId !== undefined && this.selectedFieldId?.toString() !== "") || this.selectedArea) {
      this.jobFieldId = this.selectedFieldId || undefined;
      this.jobArea = this.selectedArea || undefined;
    }
  }
  onJobFieldLinkClicked(jobFieldId: number | undefined): void {
    console.log(jobFieldId);
    if (jobFieldId !== this.selectedFieldId) {
      this.selectedFieldId = jobFieldId;
      this.onSearch();
    }
  }
  
}