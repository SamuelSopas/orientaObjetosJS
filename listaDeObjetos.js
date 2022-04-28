const cliente = {
    nome : 'samuel',
    idade : 17 ,
    cpf : '10315398671',
    email : 'samuelsopas@gmail.com' ,
    fones: ['998086012','988139858']
}
cliente.dependentes = [{
    nome: 'Sara',
    parentesco: 'filha',
    dataNasc: '20/06/1997'
}]

cliente.dependentes.push({
    nome: 'Samia',
    parentesco: 'filha',
    dataNasc: '28/08/2002'
})

console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === '28/08/2002')

console.log(filhaMaisNova)