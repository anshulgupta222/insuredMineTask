import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data: string | undefined = '';
  loggedInUser: string = ''
  isUserLoggedIn: boolean = false;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {

    this.authService.$userName.subscribe(response => {
      this.data = response;
      this.loggedInUser = JSON.parse(this.data!)?.toUpperCase();
      if (this.data) {
        this.isUserLoggedIn = true;
      }
      else {
        this.isUserLoggedIn = false;
      }
    })

  }

  logout(): void {
    this.authService.logout();
  }

}
