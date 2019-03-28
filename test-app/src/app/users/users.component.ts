import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { User } from './user.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UsersService,private router:Router) { }

  users : any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUser().subscribe(
      (response) => {
        this.users = response;
      },
      error =>{
        console.log("error");
      }
    )
  }

  
  onView(user:User){   
    this.router.navigate(['/albums', user.id]); 
  }

}
