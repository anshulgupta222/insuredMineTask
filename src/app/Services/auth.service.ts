import { Injectable } from '@angular/core';
import { UserLogin } from '../Models/user-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { usersDB } from '../dbData';
import { Router } from '@angular/router';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $userName = new BehaviorSubject<string|undefined>(undefined);
  constructor(private readonly router : Router) {this.refreshUser(); }

  login(credential:UserLogin): User | undefined {
    let validUserData : User | undefined = usersDB.find(user=>(user.userid===credential.email && user.password === credential.password))
    return validUserData;
  }

  logout():void{
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
    this.refreshUser();
  }

  refreshUser():void{
    let userName = localStorage.getItem('user');
    this.$userName.next(userName!);
  }

}
