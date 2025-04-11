import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logininterface } from 'src/Interfaces/logininterface';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  ClientRegister(data: any) {
    return this.http.post('https://vakiluncle.in/api/ClientRegister', data)
  }

  statelistapi() {
    return this.http.get('https://vakiluncle.in/api/statelist')
  }


  citylistapi(cityId: number) {
    return this.http.get(`https://vakiluncle.in/api/citylist/${cityId}`);

  }

  
  loginapi(data: Logininterface):Observable<any> {
    return this.http.post<any>('https://vakiluncle.in/api/Login', data)
  }
}
