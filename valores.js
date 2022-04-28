const cliente = {
    nome : 'samuel',
    idade : 17 ,
    cpf : '10315398671',
    email : 'samuelsopas@gmail.com' ,
    fones: ['998086012','988139858']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/06/1997'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara silva'

console.log(cliente)