import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  alertStatus: boolean =false;
  isValid: boolean = false;
  
  userNameLogin: string = '';
  userNameDetail: string ='';
  UserPaasword: string = '';
  userPass: string = '';
  
  constructor(private _loginstate:HeroService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.userNameLogin = 'Roshan';
    this.UserPaasword = 'Roshan';
    
    this.userNameDetail=form.value.Name;
    this.userPass=form.value.Password;
    
    console.log(this.userNameDetail);
    console.log(this.userPass);

    if(this.userNameLogin != this.userNameDetail || this.UserPaasword != this.userPass ){
      this.alertStatus=true;
    }

    else if(this.userNameLogin === this.userNameDetail || this.UserPaasword === this.userPass){
      this.isValid=true;
      this._loginstate.status(true)
      this.router.navigate(['directory']);
      console.log(this._loginstate.isLogin())
    }
  
  } 
}