import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
    
  }

  login(email: string, password: string) {
    return new Promise((reslove, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
        (userData) => reslove(userData),
        (err) => reject(err)
      );
    });
  }

  createAccount(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOut() {
    this.afAuth.auth.signOut();
  }

  userState() {
    this.user = this.afAuth.authState;
  }
}
