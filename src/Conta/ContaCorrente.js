import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{

    constructor(agencia, cliente) {
        super(agencia, cliente, 0);
    }
    sacar(valor) {
        if (this._saldo <= valor){
            throw new Error(`Valor a sacar é inválido`);
        }
        let taxa = 1.05;
        let valorSacar = taxa * valor;
        return (this._saldo -= valorSacar);
    }
}

