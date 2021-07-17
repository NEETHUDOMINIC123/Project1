import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formdemo';
  User={username:'admin',
        password:'1234'};

userVerify()
{
  alert("Successfull Login")
}
      }
