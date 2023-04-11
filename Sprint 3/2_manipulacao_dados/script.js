alert('Calculadora de IMC');

let peso = parseInt(prompt('Digite o seu peso'));
let altura = parseFloat(prompt('Digite a sua altura'));

let imc = peso / (altura * altura)


console.log(typeof peso)
console.log(typeof altura)

alert(`Seu IMC é: ${imc.toFixed(2)}`)


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

