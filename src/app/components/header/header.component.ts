import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data :any;
  loggedInUser :string = ''
  isUserLoggedIn : boolean = false;

  constructor(private readonly authService : AuthService){}

  ngOnInit(){

      this.authService.$userName.subscribe(response => {
        this.data  = response ;
        this.loggedInUser =JSON.parse(this.data)?.toUpperCase();
        console.log(this.loggedInUser);
        if(this.data != undefined || this.data != null){
          this.isUserLoggedIn = true;
        }
        else{
          this.isUserLoggedIn = false;
        }
      })

  }

  logout():void{
    this.authService.logout();
  }

}
