import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { AuthGuard } from './services/authGuard.service';
import { AppliedJobsListComponent } from './components/job/applied-jobs-list/applied-jobs-list.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { AddJobComponent } from './components/job/add-job/add-job.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'jobs_list', pathMatch: 'full' },
      { path: 'jobs_list', component: JobListComponent },
      { path: 'jobs_list/:fieldName', component:JobListComponent  },
      { path: 'applied_jobs_list', component: AppliedJobsListComponent },
      { path: 'edit_user', component: UpdateUserComponent },
      { path: 'addJob', component: AddJobComponent },
    ]
  },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
