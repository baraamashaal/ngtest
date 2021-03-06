import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers : [AuthService],
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
  
  }
  login(ngForm){
    if(ngForm.valid){
      this.auth.login(ngForm.value);
    }
  }
}
