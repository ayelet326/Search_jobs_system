import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';
import { JobField } from '../../models/jobField';
import { Router } from '@angular/router';
import { JobFieldService } from '../../services/jobField.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit {
  currentUser!: User;
  CVsNumber: number | undefined;
  jobFieldName: string | undefined;
  jobField?: JobField;
  @Output() jobFieldLinkClicked: EventEmitter<number|undefined > = new EventEmitter<number|undefined>();

  constructor(private jobFieldService: JobFieldService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("Current-user") || '{}');
    this.CVsNumber = this.currentUser.cVsSentCount;
    this.userService.userUpdated.subscribe((updatedUser: User) => {
      this.CVsNumber = updatedUser.cVsSentCount;
    });
    this.getJobFieldDetails();
  }

  getJobFieldDetails() {
    this.jobFieldService.getJobFieldById(this.currentUser.jobFieldId).subscribe((jobField:JobField|undefined)=>{
      this.jobFieldName = jobField?.jobFieldName;
      this.jobField=jobField;
    })
  }

  onJobFieldLinkClick(): void {
    console.log(this.jobField?.jobFieldId);
    this.jobFieldLinkClicked.emit(this.jobField?.jobFieldId);
  }
}


