import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { 

  }

  service(data){
   return this.http.get("http://192.168.1.238:4020/users/user_details?id="+data)
  }
}
