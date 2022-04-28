const cliente = 
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
saldo : 100,
depositar : function(valor){
    this.saldo += valor
}

}

function oferecerSeguro(obj) 
{
    const propsClientes = Object.keys(obj);
    if (propsClientes.includes('dependentes'))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
    
} 

oferecerSeguro(cliente)