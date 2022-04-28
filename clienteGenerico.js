function cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo =saldo
    this.depositar = function(valor) {
        this.saldo +=valor 
    }

}

const samuel = new cliente('samuel','10315398671','samuelsopas@gmail.com',100)

console.log(samuel)



