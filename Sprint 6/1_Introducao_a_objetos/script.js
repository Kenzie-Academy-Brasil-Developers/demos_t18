//OBJETOS
const pessoa = {
    nome: 'Thiago',
    sobrenome: 'Koman',
    idade: 25, // 0  1
    aniversario: [1,22],
    admin: true,
    removeAdmin: function (){
        this.admin = false;
    }
}

// for(chave in pessoa){
//     let valor = pessoa[chave];
//     console.log(valor);
// }

pessoa.removeAdmin(pessoa);

function conveteAniversarioParaObj(obj){
    obj.aniversario = 
    {
        dia: obj.aniversario[1],
        mes: obj.aniversario[0]
    }
    return obj
}
conveteAniversarioParaObj(pessoa);

console.log(pessoa);

// console.log(`Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}, você tem ${pessoa.idade} anos de idade e faz aniversário em ${pessoa.aniversario.dia}/${pessoa.aniversario.mes}.`);

let arrayPessoa = ['Thiago','Koman',25,[1,22],true]


{
// let garrafinhaDagua = {
//     marca: 'Cristal Azul',
//     produto: 'Agua-Mineral',
//     quantidade: 0.5,
//     incolor: true,
// }

// let arrayGarrafas = ['garrafa 500ml Cristal Azul', 'garrafa 1l Cristal Azul', 'garrafa 5l Cristal Azul']
}

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);
// console.log(pessoa.aniversario);

// console.log(pessoa['nome']); 

let array = ['nome','sobrenome','kenzie'];
array.push('idade');
// console.log(array);

for(let i = 0; i<array.length ; i++){
    let chave = array[i]; //'kenzie'
    // console.log(chave);
}


let batatinha = 'nome';
// console.log(pessoa['nome'])