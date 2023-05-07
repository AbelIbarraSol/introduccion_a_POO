//Importacion de clases
import { CuentaCorriente } from './CuentaCorriente.js';
import { Cliente } from './Cliente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Abel Ibarra Solgorre';
cliente.dniCliente = '75889451';

const cuentaDeAbel = new CuentaCorriente();
cuentaDeAbel.numero = '1';
cuentaDeAbel.agencia = '001';
//composcion de clases | unir la clase cliente en la clase cuenta
cuentaDeAbel.cliente = cliente;

let saldo = cuentaDeAbel.verSaldo();
saldo = cuentaDeAbel.depositoEnCuenta(150);
console.log(
	`El saldo actual de la cuenta de ${cliente.nombreCliente} es: ${saldo}`
);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Mario Ibarra';
cliente2.dniCliente = '05634374';

const cuentaDeMario = new CuentaCorriente();
cuentaDeMario.numero = '2';
cuentaDeMario.agencia = '002';
cuentaDeMario.setCliente = cliente2;

console.log(cuentaDeMario.getCliente);

cuentaDeMario.setCliente = 0;

console.log(cuentaDeMario.getCliente);

const parametroValor = 100;
cuentaDeAbel.transferenciaParaCuenta(parametroValor, cuentaDeMario);

const saldoMario = cuentaDeMario.verSaldo();
//console.log(`El saldo actual de la cuenta de ${cliente2.nombreCliente} es: ${saldo}`);

const saldoAbel = cuentaDeAbel.verSaldo();
//console.log(`El saldo actual de la cuenta de ${cliente.nombreCliente} es: ${saldoAbel}`);
