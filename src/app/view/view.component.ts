import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['./view.component.scss'],
//   providers:[AppService]
// })
// export class ViewComponent implements OnInit {
//   constructor(private service: AppService){}
//   users = [{
//     firstName:'baraa',
//     username:'baraamashaal',
//     id:0
//   }];
//   ngOnInit() {
//     this.getUsers()
    
//     // this.service.getUsers().subscribe((response:Response) => console.log(response))
//   }
//   getUsers(){
//     this.service.getUsers().subscribe(data => this.users = data.json());
//   }

//   deleteUser(userId){
//     this.service.deleteUser(userId).subscribe(data => this.getUsers());
//   }
// }

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(private af: AngularFire) { }
  items:FirebaseListObservable<any>;
  ngOnInit() {
    this.items = this.af.database.list('/items');
    console.log(this.items);
  }
}