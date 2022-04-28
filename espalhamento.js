const clientes = [
    {
        nome : 'samuel',
        idade : 17 ,
        cpf : '10315398671',
        email : 'samuelsopas@gmail.com' ,
        fones: ['998086012','988139858'],
        dependentes : 
        [
            {
        nome: 'Sara',
        parentesco: 'filha',
        dataNasc: '20/06/1997'
            },
            {
        nome: 'Samia',
        parentesco: 'filha',
        dataNasc: '28/08/2002'
            }
        ], 
    },
    {
        nome : 'leandra',
        idade : 23 ,
        cpf : '10315398671',
        email : 'samuelsopas@gmail.com' ,
        fones: ['998086012','988139858'],
        dependentes : 
        [
            {
        nome: 'junia',
        parentesco: 'filha',
        dataNasc: '20/06/1997'
            },
            {
        nome: 'salassa',
        parentesco: 'filha',
        dataNasc: '28/08/2002'
            }
        ],   
    }
]


let listaDependentes = []
for(let i =0 ; i < clientes.length; i++) {
     
   listaDependentes.push(...clientes[i].dependentes)
   
}
console.log(listaDependentes)
console.table(listaDependentes)




