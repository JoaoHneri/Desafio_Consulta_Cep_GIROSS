import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const bodyReq = { email: email, password: password };
    return this.http
      .post<any>(`${this.apiUrl}/login`, bodyReq)
      .pipe(
        tap((res) => {
          console.log('Logado com sucesso:', res)
          localStorage.setItem('user', JSON.stringify(res));
          localStorage.setItem('id', res.id)
          localStorage.setItem('token', res.access_token);
        })
      );
  }
}
