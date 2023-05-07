//Importacion de clases
import { CuentaCorriente } from './CuentaCorriente.js';
import { Cliente } from './Cliente.js';

const cliente = new Cliente('Abel Ibarra Solgorre', '75889451', '102762145897');
const cliente2 = new Cliente('Mario Ibarra', '05634374', '100075489842');

const cuentaDeAbel = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMario = new CuentaCorriente(cliente2, '2', '002');

let saldo = cuentaDeAbel.verSaldo();
saldo = cuentaDeAbel.depositoEnCuenta(150);

console.log(CuentaCorriente.cantidadCuentas);



