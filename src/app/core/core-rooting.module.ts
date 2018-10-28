import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './users/components/listuser.component';
import { LoginComponent } from './users/components/login/login.component';
import { UserService  } from './users/service/userservice.service';
import { AuthenticationService } from './users/service/authentication-service.service';
import { AuthGuardService } from './users/service/auth-guard.service';
import { RoleGuardService } from './users/service/role-guard.service';


const routes :Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user',
    component: ListuserComponent,
    //canActivate: [AuthGuardService],
    canActivate: [RoleGuardService],  
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class CoreRootingModule { }
