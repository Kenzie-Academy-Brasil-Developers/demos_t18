//Função para auxiliar na formatação de datas
function format2Decimals(n){
    let str = `${n}`;
    if(str.length < 2){
        return '0' + str;
    }else{
        return str;
    }
}

let dia = '8';
let mes = '4';
let ano = '2023';

let dataFormatada = `${format2Decimals(dia)}/${format2Decimals(mes)}/${ano}`;

// Função que vefica se o numero é par
function chechPair(n){
    if(n%2==0){
        return true;
    }
    return false;
}
{
// console.log(chechPair(2));
// console.log(chechPair(3));
// console.log(chechPair(15));
}
//Função para verificar se um numero é divisivel por outro

function isMultiple(n, div){
    if(n%div==0){
        return true;
    }
    return false;
}
// console.log(isMultiple(12,4));//true
// console.log(isMultiple(12,3));//true
// console.log(isMultiple(12,5));//false

//NO-ELSE-RETURN


//REUTILIZAÇÃO DE FUNÇÃO E COMO RENOMEAR
function vaca(){
    console.log('muuuuuuuuu');
}

let mimosa = vaca;
// vaca();
// mimosa();


//MÉTODOS PRIMITIVOS

//STRING
let texto = 'A kenzie é a pior escola de programação do Brasil';
let texto2 = 'A escola kenzie tem os melhores alunos, e os alunos são os melhores!'

texto = texto.replace('pior','melhor');
// console.log(texto);

texto2 = texto2.replaceAll('alunos','devs');
// console.log(texto2);

let verifyStart = texto2.startsWith('A kenzie');
// console.log(verifyStart);

// console.log(texto.includes('kenzie'));


//NUMBER
let pi = 3.1415926535;

let strFixed = pi.toFixed(4)
// console.log(strFixed);

let float = parseFloat(strFixed);
// console.log(typeof float);

let inteiro = parseInt(pi);
// console.log(inteiro);

console.log(Number.isInteger(inteiro));


// let numToStr = `${pi}`;
let numToStr = pi+'';


let num = 3.141592;
let numToStr1 = num+'';
let numToStr2 = `${num}`;

let str = '3.1415';
let strToInteger = parseInt(str); 
let strToFloat = parseFloat(str);




