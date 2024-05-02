import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/Auth.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  userDetails: any = { username: null, password: null }


  async login(username: string, password: string) {
    const isLoggedIn = await this.authService.Login(username, password);
    if (isLoggedIn) {
        this.router.navigate(['/home']);
    } else {
        alert("user not found!");
    }
}


}
