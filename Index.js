import {Client} from "./src/Entidades/Client.js";
import {Diretor} from "./src/Entidades/Diretor.js";
import {Gerente} from "./src/Entidades/Gerente.js";
import {sistemaAuthenticacao} from "./src/LIdadores/sistemaAuthenticacao.js";
try{

    const diretor = new Diretor('Roberto', 201313041290, 10000);
    diretor.cadastrarSenha('asasas');
    const gerente = new Gerente('Gorge', 132213045320, 5000);
    gerente.cadastrarSenha('asofas');
    const cliente = new Client('Luiz', 142314134, 'AAAA');

    /*
        retorna verdadeiro se a string senha
        bater com a contida, na classe
    */
    console.log(sistemaAuthenticacao.login(cliente, 'AAAA'));
    console.log(sistemaAuthenticacao.login(diretor, 'asasas'));
    console.log(sistemaAuthenticacao.login(gerente, 'asofas'));

    }
    catch (Erro){
        console.log(Erro.message);
}
