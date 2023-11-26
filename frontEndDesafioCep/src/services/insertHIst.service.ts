import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class insertHistService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}

  addHist(cep: string, raio: number, userId: number) {
    const bodyReq = {cep: cep, raio: raio, userId: userId};
    return this.http
      .post<any>(`${this.apiUrl}/consulta`, bodyReq)
      .pipe(
        tap((res) => {
          console.log('Histórico inserido com sucesso', res)
        })
      );
  }
}
