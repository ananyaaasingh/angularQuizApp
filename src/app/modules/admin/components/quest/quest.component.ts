import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { questModel } from './quest.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  showAdd! : boolean;
  showUpdate! : boolean;
  formValue!: FormGroup;
questModelObj : questModel = new questModel();
questData : any
constructor(private formbuilder: FormBuilder, private auth : AuthService, private route : Router){ }

ngOnInit(): void {
  this.formValue = this.formbuilder.group({
    question : [''],
    optionA:[''],
    optionB:[''],
    optionC:[''],
    optionD:[''],
    correctAns:['']
  })
  this.getAll();
}
postDetails(){
  this.questModelObj.question = this.formValue.value.question;
  this.questModelObj.optionA = this.formValue.value.optionA;
  this.questModelObj.optionB = this.formValue.value.optionB;
  this.questModelObj.optionC = this.formValue.value.optionC;
  this.questModelObj.optionD = this.formValue.value.optionD;
  this.questModelObj.correctAns = this.formValue.value.correctAns


  this.auth.postData(this.questModelObj)
  .subscribe((res: any) =>{
    console.log(res);
    alert('quest added success');
    
    this.formValue.reset();
    this.getAll();

  },
    (err: any)=>{
      alert('smth wrong');
    }
  )
}

getAll(){
  this.auth.getData()
  .subscribe(res =>{
    this.questData = res;
  })
}

deleteQuest(row:any){
  this.auth.deleteData(row.id)
  .subscribe(res =>{
    alert("Question deleted")
    this.getAll();
  })
}

onEdit(row : any){
  this.showAdd = false;
  this.showUpdate = true;
  this.questModelObj.id = row.id;
  this.formValue.controls['question'].setValue(row.question);
  this.formValue.controls['optionA'].setValue(row.optionA);
  this.formValue.controls['optionB'].setValue(row.optionB);
  this.formValue.controls['optionC'].setValue(row.optionC);
  this.formValue.controls['optionD'].setValue(row.optionD);
  this.formValue.controls['correctAns'].setValue(row.correctAns);
}

clickAdd()
{
  this.formValue.reset()
  this.showAdd = true;
  this.showUpdate = false;
}

updateDetails(){
   this.questModelObj.question = this.formValue.value.question;
  this.questModelObj.optionA = this.formValue.value.optionA;
  this.questModelObj.optionB = this.formValue.value.optionB;
  this.questModelObj.optionC = this.formValue.value.optionC;
  this.questModelObj.optionD = this.formValue.value.optionD;
  this.questModelObj.correctAns = this.formValue.value.correctAns;
  this.auth.updateData(this.questModelObj, this.questModelObj.id)
  .subscribe(res =>{
    alert(' question updated');
    this.getAll()
  
  })
}

onQuiz(){
  this.route.navigateByUrl('quiz')
}

}

































// index : number = this.authService.indexValue;
// private questionText : Array<any> = [];
// isData : boolean = false;
// questionInfo : any[] | undefined;
// edit : boolean = false

// questionForm = this.fb.group({
//   question : [''],
//   optionA : [''],
//   optionB : [''],
//   optionC : [''],
//   optionD : ['']
// })

// optionC: any;
// question: any;
// optionA: any;
// optionB: any;
// optionD: any;
// rowQuestion: any;
// queData : any


// constructor(private authService : AuthService, private fb : FormBuilder) {
//   this.questionData();
// }

// ngOnInit(): void {}

// questionData(){
// this.questionInfo = JSON.parse(localStorage.getItem('questionData') || '[]')
// }


// onSubmit(){
  
//   this.isData = true
//   console.log(this.questionForm.value)
//   this.questionText = JSON.parse(localStorage.getItem("questionData") || "[]");
//   this.questionText.push(this.questionForm.value);
//   localStorage.setItem('questionData', JSON.stringify(this.questionText));
//   alert("question updated")
//   this.questionData()
// }


// onDelete(row: { question: any; }){
// const questionList = JSON.parse(localStorage.getItem('questionData')!)
// questionList.splice(
//   questionList.findIndex(
//     (a: any) => a.question === row.question
//   ),
//   1
// );
// localStorage.setItem('questionData', JSON.stringify(questionList));
// this.questionData();
// }