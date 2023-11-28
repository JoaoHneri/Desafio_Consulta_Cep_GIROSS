import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class insertHistService {
  apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  user: any = localStorage.getItem('token');

  addHist(cep: string, raio: number, userId: number) {
    const bodyReq = { cep: cep, raio: raio, userId: userId };
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.user}`);
    return this.http.post<any>(`${this.apiUrl}/consulta`, bodyReq, {headers}).pipe(
      tap((res) => {
        console.log('Histórico inserido com sucesso', res);
      })
    );
  }
}
