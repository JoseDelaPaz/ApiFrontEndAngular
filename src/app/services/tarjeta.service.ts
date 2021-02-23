import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tarjetaCredito } from '../models/tarjetaCredito';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  myAppUrl = 'https://localhost:44328/';
  myApiUrl = 'api/TarjetaCredito/';
  private actualizarFormulario = new BehaviorSubject<tarjetaCredito>({} as any);
  listado: tarjetaCredito[];


  constructor(private http: HttpClient) { }

  guardarTarjeta(tarjeta: tarjetaCredito): Observable<tarjetaCredito> {
    return this.http.post<tarjetaCredito>(this.myAppUrl + this.myApiUrl, tarjeta);
  }

  EliminarTarjeta(id: number): Observable<tarjetaCredito> {
    return this.http.delete<tarjetaCredito>(this.myAppUrl + this.myApiUrl + id);
  }

  ListadoTarjeta() {
    this.http.get(this.myAppUrl + this.myApiUrl).toPromise()
      .then(data => {
        this.listado = data as tarjetaCredito[];
      });
  }

  actualizarTarjeta(tarjeta) {
    this.actualizarFormulario.next(tarjeta);
  }

  obtenerTarjeta(): Observable<tarjetaCredito> {
    return this.actualizarFormulario.asObservable();
  }

  guardarActualizar(id: number, tarjeta: tarjetaCredito): Observable<tarjetaCredito> {
    return this.http.put<tarjetaCredito>(this.myAppUrl + this.myApiUrl + id, tarjeta);
  }
}
