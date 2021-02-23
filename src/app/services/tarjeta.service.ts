import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myAppUrl = 'https://localhost:44328/';
  myApiUrl = 'api/TarjetaCredito/';


  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: tarjetaCredito): Observable<tarjetaCredito> {
    return this.http.post<tarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta);
  }

}
