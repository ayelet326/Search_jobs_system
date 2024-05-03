import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentUser: User = JSON.parse(localStorage.getItem("Current-user") || '{}');

  userName:string="ayelet"

}
