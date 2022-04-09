import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
    url=""
   constructor( private http:HttpClient) { }





   getuser(){
     return  this.http.get('http://localhost:8080/admin/user/all');
   }
}
