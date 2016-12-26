import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService, User} from '../app.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss'],
  providers:[AppService],
})
export class InsertComponent implements OnInit {
  user:User;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getUsers()
  }

  onSubmit(user){
    // console.log(form);
    this.service.insertUser(user).subscribe(data => console.log(data));
  }
  
}
