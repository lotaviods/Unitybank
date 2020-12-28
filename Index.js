import {Client} from "./src/Client.js";
import {ContaCorrente} from "./src/ContaCorrente.js";
try{
    const cliente1 = new Client('Luiz', 320102030);
    const cliente2 = new Client('Isadora', 329102030);

    const conta1 = new ContaCorrente(1002, cliente1);

    conta1.depositar(10);
    console.log(conta1);

    const conta2 = new ContaCorrente(1002, cliente2);

    conta2.depositar(100);
    conta2.transferir(50, conta1);
    console.log(conta2);

    }
    catch (Erro){
        console.log(Erro.message);
}
