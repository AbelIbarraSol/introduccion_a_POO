export class CuentaCorriente {
	cliente;
	numero;
	#saldo;
	agencia;

	constructor() {
		this.cliente = null;
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

	transferenciaParaCuenta(valor, cuentaDestino){
		this.retiroEnCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
	}
}
