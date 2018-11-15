import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Users } from '../../models/users';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsersService]


})
export class LoginComponent implements OnInit {
public users:Users;
  constructor(private usersService: UsersService) {  this.users = new Users();
  }

  ngOnInit() {
  }
/*
  validateLogin(form:NgForm) {
    if(this.users.correo && this.users.contrasena) {
      this.usersService.validateLogin(this.users).subscribe(result => {
     //  let routerLink="/dashboard";
      console.log('result is ', result);
    }, error => {
      console.log('error is ', error);
    });
    } else {
      alert('enter user name and password');
    }
  }

 */
  
}
