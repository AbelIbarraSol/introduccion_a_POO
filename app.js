class Cliente {
	nombreCliente;
	dniCliente;
	numeroCuenta;
	saldoCuenta;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = 'Alejandro Perez Ordoñez';
cliente1.dniCliente = '07455894';
cliente1.numeroCuenta = '7458-9541-3524-5687';
cliente1.saldoCuenta = 2000;

const cliente2 = new Cliente();

cliente2.nombreCliente = 'Emilio Pablo Cordoba Sanchez';
cliente2.dniCliente = '148552679';
cliente2.numeroCuenta = '4978-5525-9654-4125';
cliente2.saldoCuenta = 7000;

console.log(cliente1);
console.log(cliente2);
