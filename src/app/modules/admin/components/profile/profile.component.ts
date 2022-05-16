import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  
  val : string ='';
  users = JSON.parse(localStorage.getItem('userData') || '[]')
  index : number =  JSON.parse(sessionStorage.getItem('keyValue'));

  constructor(private authService : AuthService, private router : Router) { 
    this.loadImg();
  }

  name = this.users[this.index].name;
  email = this.users[this.index].email;
  password = this.users[this.index].password;
  number = this.users[this.index].number;

  

  edit: boolean = false;
  isUpdated: boolean = false;
  flag: boolean = true;
  editImg: boolean = false;

  loadImg(){
    if(localStorage.getItem(this.email)){
      this.url = JSON.parse(localStorage.getItem(this.email) || '[]');
    }
  }
  
   Edit(): void {
    this.edit = true;
    
  }

  Submit(): void{
    this.isUpdated = true;
    localStorage.removeItem('key1');


  if(this.flag){
  const userInfo = JSON.parse(localStorage.getItem('userData') || '[]');
  userInfo[this.index].name = this.name;
  userInfo[this.index].email = this.email;
  userInfo[this.index].password = this.password;
  userInfo[this.index].number = this.number;
  localStorage.setItem('userData', JSON.stringify(userInfo));
}
this.edit = false;

  }

  ngOnInit(): void {
  }

 url  = "./assets/Cat03.jpg";

onSelectFile(e : any){
if(e.target.files){
  let reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload = (event:any) =>{
    this.url = event.target.result;
    this.val = JSON.stringify(reader.result);
    localStorage.setItem(this.email, this.val);
  }
}
}


}



































