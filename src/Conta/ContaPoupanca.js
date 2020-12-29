import {Conta} from "./Conta.js";

export class ContaPoupanca extends Conta{

    constructor(agencia, cliente, saldoInicial) {
        if (saldoInicial == null){
            super(agencia,cliente, 0);
        }else {
            super(agencia, cliente, saldoInicial);
        }
    }
    sacar(valor) {
        if (this._saldo <= valor){
            throw new Error(`Valor a sacar é inválido`);
        }
        let taxa = 1.01;
        let valorSacar = taxa * valor;
        return (this._saldo -= valorSacar);
    }
}