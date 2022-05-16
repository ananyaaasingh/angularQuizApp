import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  showNext : boolean = false
  showData : boolean = false
  complete : boolean = false
  right : number = 0
  wrong : number = 0
  score : number = 0
  public num : number = 1
  quizData : any
  users = JSON.parse(localStorage.getItem('userData') || '[]')
  i : number =  JSON.parse(sessionStorage.getItem('keyValue'));
  index: any;
  answer : string =''
  data : string
  quizInfo : any

  constructor(private auth : AuthService, private formbuilder : FormBuilder, private route : Router) { }

  
  ngOnInit(): void {
    this.getQuestion(this.num);
    this.getAll();
  }

 name = this.users[this.i].name;

 getAll(){
this.auth.getData()
.subscribe(res =>{
this.quizInfo = res;
})
 }

 getQuestion(e){

  this.index = e;
   this.auth.getQuest(this.index)
   .subscribe(res =>{
     this.quizData = res;
   })

 }

//   quizForm = this.formbuilder.group({
//   question : [''],
//   optionA : [''],
//   optionB : [''],
//   optionC : [''],
//   optionD : [''],
//   correctAns : ['']
// })

quizForm = new FormGroup({
  options : new FormControl('', Validators.required)
});


get f(){
  return this.quizForm.controls;
}


 onSubmit(){
   this.showNext = true
   this.quizForm.reset()
   if(this.quizData.correctAns===this.answer){
  this.score++
  this.right++
  this.data = 'Correct Answer! Move Ahead'
  }
  else{
  this.wrong++
  this.data = 'Wrong Answer! Correct Answer is ' + this.quizData.correctAns;

}
 }

 onNext(){
    this.data =''
    this.showNext = false
    if(this.num<this.quizInfo.length){
      if(this.num==(this.quizInfo.length)-1){
        this.num++;
        this.getQuestion(this.num);
        this.complete = true
      }
    this.num++;
    this.getQuestion(this.num);
    }

    else{
      this.showData = true

    }
 }



 startAgain(){
   this.route.navigateByUrl('./quiz') }

 checkAns(){
   this.answer='A';
 }

 checkAns1(){
  this.answer='B';
}

checkAns2(){
  this.answer='C';
}

checkAns3(){
  this.answer='D';
}



}
