import { Component, OnInit } from '@angular/core';
import {BikeClear} from "../bike-clear";
import {BikeClearService} from "../bike-clear.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-bike-clear-list',
  templateUrl: './bike-clear-list.component.html',
  styleUrls: ['./bike-clear-list.component.css']
})
export class BikeClearListComponent implements OnInit {

  bikeclears: BikeClear[] = [];

  constructor(
    public bikeClearService: BikeClearService,
    public userService: UserService) {
  }

  ngOnInit(): void {
    this.findById();
  }

  findById() {
    if (sessionStorage.getItem('id') != null) {
      let id = Number(sessionStorage.getItem('id'))
      this.userService.findById(id).subscribe(
        user => this.bikeclears = user.bikeClears
      )
    }
  }
}

 /*getAll() {
    this.bikeClearService.getAll().subscribe(
      data => this.bikeclears = data
    )
  }

  delete(id: number) {
    this.bikeClearService.delete(id).subscribe(
      () => this.findById()
    )
  }
}*/
