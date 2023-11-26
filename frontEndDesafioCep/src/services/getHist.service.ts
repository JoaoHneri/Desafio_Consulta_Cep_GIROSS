import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class getHistService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}

  getHist(userId: number) {

    return this.http
      .get<any>(`${this.apiUrl}/consulta/${userId}`)
      .pipe(
        tap((res) => {
          console.log('Histórico captado com sucesso', res)
        })
      );
  }
}
