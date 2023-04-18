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

let dataFormatada = `${format2Decimals(dia)}/${format2Decimals(mes)}/${ano}`; // 08/04/2023


//Verificar se o numero é par
//Verificar se o numero é impar

// console.log(dataFormatada);


//----------------------------------------------------------------------

//ESCOPOS

//Escobo global
const escopoGlobal = 'global'; 

//Escopo de bloco
{
    var escopoBloco = 'bloco';
    // console.log(escopoGlobal);
    // console.log(escopoBloco);
}
//console.log(escopoBloco);

//Escopo de função
function teste(){
    var escopoFuncao = 'função';
    // console.log(escopoFuncao);
}
teste()
// console.log(escopoFuncao);

