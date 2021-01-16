import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { modalAnimation } from "../animations/animations";

@Component({
  selector: "ama-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [modalAnimation]
})
export class LoginComponent implements OnInit {
  showModal = false;
  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["markovtsvetomir95@gmail.com", Validators.required],
      password: ["123456789", Validators.required],
    });
  }

  onSignIn() {
    let email = this.loginForm.value.email;
    let password = this.loginForm.value.password;

    this.auth
      .login(email, password)
      .then((res) => {
        if (res) {
          this.showModal = true;
          setTimeout(()=> {
            this.showModal = false;
            this.router.navigate([""]);
          }, 3000)
        }
        // 
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onCreateAccount() {
    this.auth
      .createAccount(this.loginForm.value.email, this.loginForm.value.password)
      .then((res) => {
        console.log("You are created new account");
        this.router.navigate([""]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closeModal() {
    this.showModal = false;
    setTimeout(() => {
      this.router.navigate([""]);
    },1000)
  }
}
