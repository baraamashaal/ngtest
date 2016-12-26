import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AppService {
  private dbUrl : string = 'http://localhost:3000/users/';
  
  constructor(private http : Http) {

  }

  getUsers(userId:string = ''):Observable<Response>{
    return this.http.get(`${this.dbUrl}${userId}`);
  }

  insertUser(user:User):Observable<Response>{
    return this.http.post(this.dbUrl,user);
  }

  updateUser(user:User):Observable<Response>{
    return this.http.put(`${this.dbUrl}${user.id}`,user);
  }

  deleteUser(userId:string){
    return this.http.delete(`${this.dbUrl}${userId}`);
  }

}

export interface User {
  id:string;
  firstName?:string;
  lastName?:string;
  email:string;
}
