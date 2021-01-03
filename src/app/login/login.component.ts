import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "ama-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private auth: AuthService,
    private router: Router,
    public flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.auth
      .login(this.email, this.password)
      .then((res) => {
        
        
        
          this.router.navigate([""]);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onCreateAccount() {
    this.auth
      .createAccount(this.email, this.password)
      .then((res) => {
        console.log("You are created new account");
        this.router.navigate([""]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
