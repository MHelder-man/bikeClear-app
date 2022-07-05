import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  CheckCurrentUser: boolean = false;

  constructor(
    public userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') != null) {
      let id = Number(sessionStorage.getItem('id'))
      this.userService.findById(id).subscribe(
        user => this.userService.currentUser = user)
      this.CheckCurrentUser = true;
    }
  }

  logout () {
    this.userService.logout()
  }
}
