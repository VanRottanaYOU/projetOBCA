import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/userservice.service';
import { User } from '../model/usermodel';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  private ListUsers : Observable<User[]>;
  private isLoaded : boolean;
  private first_name :string;
  private last_name :string;
  private token :string;
  private email :string;
  private password :string;
  private idmodif: number;
  private idsupp: number;
  private userselected: User;

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() : void {
    this.isLoaded = false;
    this.ListUsers = this.userservice.getListUsers()
    .pipe(finalize( () => this.isLoaded = true))
    
  }

  ajout() {
    const user = new User();
    user.first_name = this.first_name;
    user.last_name = this.last_name;
    user.token = this.token;
    user.email = this.email;
    user.password = this.password;
    this.userservice.postUser(user); //post = ajout
  }

  modifier() {
    const user = new User();
    user.id = this.idmodif;
    user.first_name = this.first_name;
    user.last_name = this.last_name;
    user.token = this.token;
    user.email = this.email;
    user.password = this.password;
    this.userservice.putUser(user); //put = update
  }

  supprimer() {
    this.userservice.deleteUser(this.idsupp);
  }

  select(userselected: User){
    console.log(userselected)
    this.userselected=userselected;
    this.idmodif = userselected.id;
    this.first_name = userselected.first_name;
    this.last_name = userselected.last_name;
    this.token = userselected.token;
    this.email = userselected.email;
    this.password = userselected.password;
    
  }

}
