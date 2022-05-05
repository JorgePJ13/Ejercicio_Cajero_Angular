import { Cuenta } from "./Cuenta";

export class Movimiento {

    idMovimiento : number;
    idCuenta: number
    fecha : Date;
    cantidad : number;
    operacion : string;
    cuenta : Cuenta
}