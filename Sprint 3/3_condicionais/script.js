//COMPARADORES:
/*
 == - Igual
 === - Igual com tipo
 != - Diferente de
 !== - Diferente de com tipo
 < - Menor
 > - Maior
 <= - Menor igual
 >= - Maior igual
*/

//CONDICIONAIS (IF, ELSE IF, ELSE)

let nome = prompt('Digite seu nome');

if(nome == 'thiago'){
    let senha = prompt('Digite a senha');
    if(senha == '1234'){
        alert('Usuário autenticado');
    }else{
        alert('Senha está incorreta');
    }
}else{
    alert('Usuário não cadastrado');
}



alert('Calculadora de IMC');

let peso = parseInt(prompt('Digite o seu peso'));
let altura = parseFloat(prompt('Digite a sua altura'));

let imc = peso / (altura * altura);

alert(`Seu IMC é: ${imc.toFixed(2)}`)

if(imc < 18.5){ //se o imc for menor do que 18.5 
    alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do seu peso ideal`);
}else if(imc <= 24.9){ //caso contrário
    alert(`Seu IMC é ${imc.toFixed(2)} e você está no seu peso ideal`);
}else if(imc <= 29.9){
    alert(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso`);
}else{
    alert(`Seu IMC é ${imc.toFixed(2)} e você está obeso`);
}

/* 
IMC < 18,5 - baixo peso
IMC > 18,5 até 24,9 - peso ideal
IMC ≥ 25 até 29,9 - sobrepeso
IMC > 30 - obesidade
*/



//ESCOPO DE VARIAVEL
// //let, const, var
// let test_1 = 'test';
// var test_2 = 'test';
// const test_3 = 'test';

// test_1 = 'test_2'
// test_2 = 'test_2'
// test_3 = 'test_2' Errado

let global = 'Variavel global';
let teste = 'GLOBAL'

if(true){
    teste = 'LOCAL'
    let local = 'Variavel local';
    // console.log(global);
    // console.log(local);
    console.log(teste);
}
 
// console.log(global);
// console.log(local);
console.log(teste);
