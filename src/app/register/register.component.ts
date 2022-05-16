import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private users : Array<any> = [];
  isRegister : boolean = false;
  registerForm = this.formbuilder.group({
    name : ['',[ Validators.required, Validators.minLength(3)]],
    email : [''],
    number : [''],
    password : ['']
  });
  
  register: any;
  

onSubmit(): void{
  this.isRegister = true
  console.log(this.registerForm.value)
  this.users = JSON.parse(localStorage.getItem("userData") || "[]");
  this.users.push(this.registerForm.value);
  localStorage.setItem('key','false')
  localStorage.setItem('userData', JSON.stringify(this.users));
  this.router.navigateByUrl('/login')
  alert("successfully registered")
}

  constructor(private formbuilder: FormBuilder, private router : Router) { }

  ngOnInit(): void {
  }
  get f() {
    return this.registerForm.controls;
  }


}





