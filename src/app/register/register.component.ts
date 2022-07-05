import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();

  message: string = "Vul alle velden in, of kies een andere Gebruikersnaam";
  showErrorMessage: boolean = false;

  constructor(
    public userService: UserService,
    private router : Router) {
  }

  ngOnInit(): void {
  }

  register() {
    this.userService.save(this.user).subscribe(
      data => {
        this.router.navigate(['/login']);
    }, error =>
        this.showErrorMessage = true
      );
  }

}
