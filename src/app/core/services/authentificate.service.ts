import { Injectable } from '@angular/core';

//mis importaciones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificateService {

  constructor(private http: HttpClient) { }
  //version consumiendo api
  /*loginUser(credentials:any){
    const password = credentials.password;
    return this.http.get<[]>(`http://localhost/apiRestvescoalba/public/api/users/obtener/${password}`);
  }*/

  //version quemando datos
  loginUser(credentials){
    return new Promise((accept , reject)=>{
      if(credentials.email=="info@developmenthouse.com"){
       accept("- Welcome - "); 
      }else{
        reject(" - Check email or password -");
      }
    })
  }
}
