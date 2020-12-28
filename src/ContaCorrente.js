import {Client} from "./Client.js";
export class ContaCorrente {
    // #saldo private property
    // https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;
    agencia;
    _cliente;
    static Ncontas = 0;
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.Ncontas ++;
    }
    sacar(valor) {
        if (this._saldo <= valor){
            throw new Error(`Valor a sacar é inválido`);
        }
        return (this._saldo -= valor);
    }

    depositar(valor) {
        if (valor <= 0){
            throw new Error(`Valor a depositar não é positivo`);
        }else {
            return (this._saldo += valor);
        }
    }
    transferir(valor, conta){
        try{
            this.sacar(valor);
            conta.depositar(valor);
        }catch (Erro){
            throw new Error(`Não foi possível transferir : ${Erro.message}`);
        }
    }

    get saldo(){
        return this._saldo;
    }

    set cliente(cliente){
        if (cliente instanceof Client){
            this._cliente = cliente;
        }else{
            throw new Error(`Cliente ${cliente} não encontrado`);
        }
    }
    get cliente(){
        return this._cliente;
    }
}

