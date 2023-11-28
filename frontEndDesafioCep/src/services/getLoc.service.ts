import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetLocationService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}
  user:any = localStorage.getItem('token');
  ;

  getCeps(cep: string, km: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Authorization',`Bearer ${this.user}`);
    const bodyReq = { cep: cep, km: km };
    return this.http
      .get<any>(`${this.apiUrl}/cep/proximity?cep=${cep}&km=${km}`, {headers})
      .pipe(
        tap((res) => {
          console.log('Ceps', res)
        })
      );
  }
}
