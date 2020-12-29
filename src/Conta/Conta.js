import {Client} from "../Entidades/Client.js";
export class Conta{
    static Ncontas = 0;
    _agencia;
    _saldo;
    _cliente;
    constructor(agencia, cliente,saldo) {
        if (this.constructor == Conta)
            // Mesmo efeito ao colocar a classe como abstract no PHP.
            throw new Error('[DEV] Não é possivél instanciar um objeto do tipo Conta');

        this.saldo = saldo;
        this.agencia = agencia;
        this.cliente = cliente;
        Conta.Ncontas ++;
    }
    sacar(valor) {
        // Mesmo efeito ao colocar o méthodo como abstract no PHP.
        throw new Error('[DEV] Não podemos chamar um méthodo abstrato')
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
    set saldo(saldo){
        this._saldo = saldo;
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
    set agencia(agencia){
        this._agencia = agencia;
    }
    get agencia(){
        return this._agencia;
    }

}