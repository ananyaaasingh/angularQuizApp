import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuestComponent } from './components/quest/quest.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  {
    path : "" , component : DashboardComponent,
    children : [
      {
        path : "home" , component : HomeComponent
      },
      {
        path : "profile" , component : ProfileComponent
      },
      {
        path : "quest" , component : QuestComponent
      },
      {
        path : "register" , component : RegisterComponent
      },
      {
        path : "login" , component : LoginComponent
      },
     {
       path : "quiz" , component : QuizComponent
     },
      {
        path : "" , redirectTo : '/admin/home' , pathMatch : 'full'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
