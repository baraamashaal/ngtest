import { Component/*, OnInit*/ } from '@angular/core';

// import { Response } from '@angular/http';

// import { AppService } from './app.service';

@Component({
  selector: '#sample-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [AppService]
})
export class AppComponent {

}
// export class AppComponent implements OnInit {
//   constructor(private service: AppService){}
//   users = [{
//     firstName:'baraa',
//     username:'baraamashaal',
//     id:0
//   }];
//   ngOnInit() {
//     this.service.getUsers().subscribe(data => this.users = data.json());
    
//     // this.service.getUsers().subscribe((response:Response) => console.log(response))
//   }
// }
