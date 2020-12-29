export class Client{
   _nome;
   _cpf;
   _senha;
   constructor(nome, cpf, senha) {
      this.nome = nome;
      this.cpf = cpf;
      this.senha = senha;
   }
   set nome(nome){
      this._nome = nome;
   }
   get nome(){
      return this._nome;
   }
   set cpf(cpf){
      this._cpf = cpf;
   }
   get cpf(){
      return this._cpf;
   }
   set senha(senha){
      this._senha = senha;
   }
   get senha(){
      return this._senha;
   }
   auth(cliente, senha){
      return cliente.senha === senha;
   }
}