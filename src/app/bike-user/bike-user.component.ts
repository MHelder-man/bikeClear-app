import { Component, OnInit } from '@angular/core';
import {BikeClearService} from "../bike-clear.service";
import {BikeClear} from "../bike-clear";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bike-user',
  templateUrl: './bike-user.component.html',
  styleUrls: ['./bike-user.component.css']
})
export class BikeUserComponent implements OnInit {

  bikeclears: BikeClear[] = [];


  constructor(public bikeClearService: BikeClearService,
              public userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('id') != null) {
      let id = Number(sessionStorage.getItem('id'))
      this.userService.findById(id).subscribe(
        user=> this.userService.currentUser = user
      )
    } else this.router.navigate(['/home'])
  }

  logout() {
    this.userService.logout();
  }
}

