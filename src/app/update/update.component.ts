import { Component, OnInit } from '@angular/core';
import { AppService, User } from '../app.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  providers:[AppService]
})
export class UpdateComponent implements OnInit {
  user:User = {
    id:'',
    email:''
  };
  constructor(private service:AppService,private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.service.getUsers(this.currentRoute.snapshot.params['id']).subscribe(data => this.user = data.json());
  }

  onSubmit(){
    this.service.updateUser(this.user).subscribe(data => console.log(data));
  }

}
