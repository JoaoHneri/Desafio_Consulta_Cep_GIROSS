import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class getHistService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}
    user: any = localStorage.getItem('token');
  getHist(userId: number) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.user}`);
    return this.http
      .get<any>(`${this.apiUrl}/consulta/${userId}`, {headers})
      .pipe(
        tap((res) => {
          console.log('Histórico captado com sucesso', res)
        })
      );
  }
}
