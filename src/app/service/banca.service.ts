import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta } from '../model/Cuenta';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class BancaService {

  urlMovimientos : string = "http://localhost:8080/Ejercicio_Cajero/Movimientos"

  constructor(private http : HttpClient) { }

  consultarSaldo() {
    return this.http.get<Cuenta>('Saldo')
  }

  consultarMovimientos(fechaIni : string, fechaFin : string) {
    return this.http.get<Movimiento[]>('Movimientos', {params : { 'fechaIni' : fechaIni, 'fechaFin' : fechaFin }})
  }

}
