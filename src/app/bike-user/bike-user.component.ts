import { Component, OnInit } from '@angular/core';
import {BikeClearService} from "../bike-clear.service";
import {BikeClear} from "../bike-clear";
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bike-user',
  templateUrl: './bike-user.component.html',
  styleUrls: ['./bike-user.component.css']
})
export class BikeUserComponent implements OnInit {

  bikeclears: BikeClear[] = [];

  constructor(public bikeClearService : BikeClearService,
  public userService : UserService,
  private router : Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bikeClearService.getAll().subscribe(
      data => this.bikeclears = data
    )
  }
}
