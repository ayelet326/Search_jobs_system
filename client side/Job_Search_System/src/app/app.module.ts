import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddJobComponent } from './components/job/add-job/add-job.component';
import { DeleteJobComponent } from './components/job/delete-job/delete-job.component';
import { ShowJobComponent } from './components/job/show-job/show-job.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppliedJobsListComponent } from './components/job/applied-jobs-list/applied-jobs-list.component';
import { JobCardDirective } from './directives/job-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    AddJobComponent,
    DeleteJobComponent,
    ShowJobComponent,
    JobListComponent,
    UpdateUserComponent,
    AppliedJobsListComponent,
    JobCardDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    Router,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
