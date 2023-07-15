import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from 'src/app/Models/user-login';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly authService: AuthService,
    private readonly toastr: ToastrService,
    private readonly router: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  })

  login(): void {
    let credentials = this.loginForm.value as UserLogin;
    let isValidUser = this.authService.login(credentials);
    console.log(isValidUser);
    if (isValidUser === undefined) {
      this.toastr.error("Access Denied");
    }
    else {
      this.toastr.success("Access Granted");
      localStorage.setItem('user', JSON.stringify(isValidUser.username));
      this.authService.refreshUser();
      this.router.navigate(['/gallery'])
    }
  }
}
