import {Cliente} from './Cliente.js'

export class CuentaCorriente {
	#cliente;
	numero;
	#saldo;
	agencia;

	//SET : ASIGNAR O ATRIBUIR
	set setCliente(valor) {
		if (valor instanceof Cliente) {
			this.#cliente = valor;
		}
	}
	//GET: OBTENER
	get getCliente() {
		return this.#cliente;
	}

	constructor() {
		this.#cliente = null;
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

	transferenciaParaCuenta(valor, cuentaDestino) {
		this.retiroEnCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
	}
}
