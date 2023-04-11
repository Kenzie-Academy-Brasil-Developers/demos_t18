// console.log('Testando a aplicação...');
//MANIPULAÇÃO DE DADOS
let nome = 'Thiago';
let sobrenome = 'Koman';  
let idade = 25;

//'Thiago Koman tem 25 anos de idade'
{
    let nomeCompleto1 = nome + ' ' + sobrenome + ' tem ' + idade +' anos de idade'; //concatenação
    let nomeCompleto2 = `${nome} ${sobrenome} tem ${idade} anos de idade`; //templateString

    // console.log(nomeCompleto2);

    let countChar1 = nomeCompleto1.length; 
    let countChar2 = nomeCompleto2.length;

    // console.log(countChar1,countChar2)
}
{
    // 'T h i a g o'
    //  0 1 2 3 4 5
    let primeiraLetra = nome[0];
    let segundaLetra = sobrenome[0];

    let abreviacao = primeiraLetra + segundaLetra;
    // console.log(abreviacao)
}

let ultimo_nome = nome[nome.length - 1]
let ultimo_sobrenome = sobrenome[sobrenome.length - 1]

console.log(ultimo_nome, ultimo_sobrenome);
