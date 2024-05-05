import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  JoinToNewsletter(emailInput:string){
alert("you joined in succesful!")
  }
}
