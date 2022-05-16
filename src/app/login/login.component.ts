import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email : any;
  password : any;

  

  constructor(private authService: AuthService, private router : Router ) { }

  ngOnInit(): void {
  }

  
  onlogin(): void{
    console.log(this.email, this.password)
  if(this.authService.check(this.email, this.password)){
  localStorage.setItem('key1', "true");
  this.router.navigateByUrl("/admin");
  }
  else{
    alert("login failed")
  }
    }

}

