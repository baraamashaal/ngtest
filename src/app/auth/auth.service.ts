import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class AuthService {
  
  constructor(private af:AngularFire) {

  }

  login(creds){
    this.af.auth.login({
      email:creds.email,
      password: creds.password
    }).then(success => console.log(success)).catch(error => console.log(error));
  }
}
