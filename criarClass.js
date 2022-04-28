class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email 
        this.cpf = cpf 
        this.saldo = saldo
    }

    depoistar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const samuel = new Cliente ('samuel','samuelsopas@gmail','123456',100)

console.log(samuel)

samuel.exibirSaldo()