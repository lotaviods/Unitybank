export class Funcionario{
    _nome;
    _salario;
    _cpf;
    _bonificacao = 1;
    _senha;
    constructor(nome, cpf, salario) {
        this.nome = nome;
        this.cpf = cpf;
        this.salario = salario;
    }
    cadastrarSenha(senha){
        this._senha = senha;
    }
    get senha(){
        return this._senha;
    }
    set cpf(cpf){
        this._cpf = cpf;
    }
    get cpf(){
        return this._cpf;
    }
    set nome(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }
    set salario(salario){
        this._salario = salario;
    }
    get salario(){
        return this._salario;
    }
    auth(funcionario, senha){
        return funcionario.senha === senha;
    }

}