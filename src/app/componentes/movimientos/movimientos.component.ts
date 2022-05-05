import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/model/Cuenta';
import { Movimiento } from 'src/app/model/Movimiento';
import { BancaService } from 'src/app/service/banca.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  cuenta : Cuenta
  movimientos : Movimiento[]
  fechaIni : string;
  fechaFin : string

  constructor(private router : Router, private service : BancaService) {
    this.service.consultarSaldo().subscribe(data => this.cuenta = data)
   }

  ngOnInit() {
    
  }

  consultarMovimientos() {
    this.service.consultarMovimientos(this.fechaIni, this.fechaFin).subscribe(data => this.movimientos = data)
  }

  /** Metodo buscado en Foro */
  toDate(timestamp : Date) {
    let date : Date = new Date(Number(timestamp)) 
    return date.getUTCFullYear() +
    '-' + ('0' + date.getUTCMonth()).slice(-2) +
    '-' + ('0' + date.getUTCDate()).slice(-2) + 
    ' ' + ('0' + date.getUTCHours()).slice(-2) +
    ':' + ('0' + date.getUTCMinutes()).slice(-2) +
    ':' + ('0' + date.getUTCSeconds()).slice(-2)
  }

}
