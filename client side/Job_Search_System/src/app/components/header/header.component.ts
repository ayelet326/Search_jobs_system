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
  showProfileOptions :boolean=false

  constructor(private jobFieldService: JobFieldService,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("Current-user") || '{}');
    this.CVsNumber = this.currentUser.cVsSentCount;
    this.userService.userUpdated.subscribe((updatedUser: User) => {
      this.CVsNumber = updatedUser.cVsSentCount;
      this.currentUser = JSON.parse(localStorage.getItem("Current-user") || '{}');
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
    this.router.navigate(['/home'], { queryParams: { fieldName: this.jobFieldName } });
  }

  onLogoutClick() {
    localStorage.removeItem('Current-user');
    this.router.navigate(['/login']);
  }
  onEditProfileClick() {
    this.router.navigate(['/edit_user']);
  }

  setShowDisconnection(){
    this.showProfileOptions=!this.showProfileOptions;
  }
}


