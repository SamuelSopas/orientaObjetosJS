// classe é importante na OO - sao modelos para a orientação a objetos
//define as propriedades, as informaçoes que precisamos e o conportamento;

class Pessoa
{
    constructor(nome,sobrenome,cpf,email) 
    {
        this.nome = nome
        this.sobrenome =  sobrenome 
        this.cpf = cpf 
        this.email = email
    }
}

function nomeCompleto() 
{
    console.log(`${this.nome} ${this.sobrenome}`)
}

class Programador extends Pessoa 
{
    constructor (nome,sobrenome,cpf,email,linguagem)
    {
        super(nome,sobrenome,cpf,email)
        this.linguagem = linguagem
    }
}


samuel = new Programador('samuel','sopas','10315398671','samuelsopas@gmail.com','JS')
leandra = new Pessoa('leandra','neiva','123456','leandranjm@hotmail.com')

console.log(leandra)
console.log(samuel)

console.log(`Ola ${samuel.nome} ${samuel.sobrenome}! confirma que seu email é ${samuel.email}? ` )
