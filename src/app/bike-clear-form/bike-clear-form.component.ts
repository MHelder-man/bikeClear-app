import {Component, Input, OnInit} from '@angular/core';
import {BikeClear} from "../bike-clear";
import {BikeClearService} from "../bike-clear.service";
import {BikeClearListComponent} from "../bike-clear-list/bike-clear-list.component";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-bike-clear-form',
  templateUrl: './bike-clear-form.component.html',
  styleUrls: ['./bike-clear-form.component.css']
})
export class BikeClearFormComponent implements OnInit {

  bikeClear = new BikeClear();

  @Input()
  bikeClearList!: BikeClearListComponent;


  constructor(public bikeClearService: BikeClearService,
  public userService : UserService) { }

  ngOnInit(): void {
  }

  add(){
    let user = this.userService.currentUser;
    let bc = this.bikeClear
    bc.user = user
    this.bikeClearService.save(bc).subscribe(
      () => this.bikeClearList.findById()
    )
  }

}
