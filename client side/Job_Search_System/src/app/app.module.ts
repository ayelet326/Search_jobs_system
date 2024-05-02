import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { AddJobComponent } from './components/job/add-job/add-job.component';
import { DeleteJobComponent } from './components/job/delete-job/delete-job.component';
import { UpdateJobComponent } from './components/job/update-job/update-job.component';
import { ShowJobComponent } from './components/job/show-job/show-job.component';
import { JobListComponent } from './components/job/job-list/job-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { DeleteUserComponent } from './components/user/delete-user/delete-user.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { ShowUserComponent } from './components/user/show-user/show-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/Auth.Service';
import { Router } from '@angular/router';
import { UserService } from './services/User.Service';
import { HttpClientModule } from '@angular/common/http';

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
    UpdateJobComponent,
    ShowJobComponent,
    JobListComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    ShowUserComponent,
    UserListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    Router,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
