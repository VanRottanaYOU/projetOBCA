import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users/service/userservice.service';
import { AuthenticationService } from './users/service/authentication-service.service';
import { ListuserComponent } from './users/components/listuser.component';
import { LoginComponent } from './users/components/login/login.component';
import { RouterModule } from '@angular/router';
import { CoreRootingModule } from './core-rooting.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [
    CommonModule,
    CoreRootingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
  ],
  exports : [
    ListuserComponent,
    LoginComponent,
    RouterModule,
  ],
  declarations: [
    ListuserComponent,
    LoginComponent
  ],
  providers: [UserService,AuthenticationService],
})
export class CoreModule { }
