class Cliente {
	nombreCliente;
	dniCliente;
}

class CuentaCorriente {
	numero;
	#saldo;
	agencia;

	constructor() {
		this.numero = '';
		this.#saldo = 0;
		this.agencia = '';
	}

	depositoEnCuenta(valor) {
		if (valor > 0) {
			this.#saldo += valor;
		}
		return this.#saldo;
	}

	retiroEnCuenta(valor) {
		if (valor <= this.#saldo) {
			this.#saldo -= valor;
		}
		return this.#saldo;
	}

	verSaldo() {
		return this.#saldo;
	}
}

cuentaDeAbel = new CuentaCorriente();

let saldo = cuentaDeAbel.verSaldo();
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeAbel.depositoEnCuenta(110);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeAbel.retiroEnCuenta(110);
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeAbel.depositoEnCuenta(10);
console.log(`El saldo actual es ${saldo}`);
