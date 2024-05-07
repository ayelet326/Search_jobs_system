import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  async login(username: string, password: string): Promise<void> {
    const isLoggedIn = await this.authService.Login(username, password);
    if (isLoggedIn) {
      this.router.navigate(['/home']);
    }
    else {
      alert("User not found");
    }
  }


}
