const cliente = {
    nome : 'samuel',
    idade : 17,
    cpf : '10315398671',
    email : 'samuelsopas@gmail.com' 
}

 console.log(cliente.nome);
 console.log(`meu nome é ${cliente.nome} e tenho ${cliente.idade} anos;`);

 console.log(cliente.cpf.substring(0,3));
let beber = false

if (cliente.idade >= 18) {
    beber = true
    console.log('Pode comprar bebidas')
} else { beber = false
    console.log('nao esta autorizado')} 