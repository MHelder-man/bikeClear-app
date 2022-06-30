import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();


  returnUrl: string = "";

  @Input()
  name = "";


  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


      //user =>
      // zet op session
      // spring naar bike-clear-list


  login() {
    this.userService.login(this.user).subscribe(
      data => {
        this.userService.currentUser = data
        sessionStorage.setItem('currentUser', 'data')
        this.router.navigate(['/bike-user']);
      }, error => this.router.navigate(['/register'])
    )
  }
}
