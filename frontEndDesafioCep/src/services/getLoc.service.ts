import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetLocationService {
    apiUrl = "http://localhost:3000"
    constructor(private http: HttpClient) {}

  getCeps(cep: string, km: string) {
    const bodyReq = { cep: cep, km: km };
    return this.http
      .get<any>(`${this.apiUrl}/cep/proximity?cep=${cep}&km=${km}`)
      .pipe(
        tap((res) => {
          console.log('Ceps', res)
        })
      );
  }
}
