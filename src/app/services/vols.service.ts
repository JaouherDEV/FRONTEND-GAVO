import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolsService {

  constructor(
    private http:HttpClient
  ) { }
  async getpays(key){
     return this.http.get("https://services.lastminute.com/suggester/autocompleter?modules=airports&lang=fr&key="+key+"&explicitNames=true&fares=true");
  }
 
  add(data:any){
     return this.http.post("http://localhost:8080/api/v1/ADD",data,{
       headers:{
        'Content-Type': 'application/json',
       }
     })
   }
}
