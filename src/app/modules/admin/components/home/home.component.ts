import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('userData') || '[]')
  index : number =  JSON.parse(sessionStorage.getItem('keyValue'));
  
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  name = this.users[this.index].name;

}
