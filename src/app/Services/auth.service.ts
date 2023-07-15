import { Injectable } from '@angular/core';
import { UserLogin } from '../Models/user-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { usersDB } from '../dbData';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $userName = new BehaviorSubject<any|undefined>(undefined);
  constructor(private readonly router : Router) {this.refreshUser(); }

  login(credential:UserLogin):any{
    let validUserData = usersDB.find(user=>(user.userid===credential.email && user.password === credential.password))
    return validUserData;
  }

  logout():void{
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
    this.refreshUser();
  }

  refreshUser():void{
    let userName = localStorage.getItem('user');
    console.log(userName);
    this.$userName.next(userName);
  }

}
