import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path : "login" , component : LoginComponent
  },
  {
    path : "register" , component : RegisterComponent
  },
 
  {
    path : "" , redirectTo : "/register" , pathMatch : "full"
  },
  {
    path : 'admin' , 
    canActivate : [AuthGuard],
    loadChildren : () =>
     import ('./modules/admin/admin.module')
     .then((m) => m.AdminModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent]