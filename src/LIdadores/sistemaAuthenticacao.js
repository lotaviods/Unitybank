export class sistemaAuthenticacao{
    static login(autenticavel, senha){
        if ("auth" in autenticavel){
            if (!autenticavel.auth(autenticavel, senha)) throw new Error(`Credenciais inválidas para ${autenticavel.nome}`);
            return true;
        }else {
            throw new Error(`Não foi possível autenticar ${autenticavel.nome}, esse perfil é autenticavél ?`);
        }
    }
}