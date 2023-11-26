import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}

  Register(email: string, password: string, name: string): Observable<any> {
    const bodyReq = { email: email, password: password, name: name };
    return this.http
      .post<any>(`${this.apiUrl}/user`, bodyReq)
      .pipe(
        tap((res) => {
          console.log('Registrado com sucesso:', res)
        })
      );
  }
}
