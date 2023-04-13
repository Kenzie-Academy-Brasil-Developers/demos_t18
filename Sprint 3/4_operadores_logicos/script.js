//OPERADORES LÓGICOS
/*
Thiago - 1234
Gabriel - 9876
 */
let nome = 'Thiago';
let senha = '1235';

if ((nome == 'Thiago' && senha == '1234') || (nome == 'Gabriel' && senha == '9876')) {
    console.log('Acesso liberado');
}else {
    console.log('Acesso bloqueado');
}
/*
AND
true  && true  = true
true  && false = false
false && true  = false
false && false = false

OR
true  || true  = true
false || true  = true
true  || false = true
false || false = false
*/


//Operador NOT


//OPERADORES DE INCREMENTO E DECREMENTO
let soma = 0;
soma = soma + 1; //1
soma = soma + 2; //3
soma = soma + 3; //6

let soma2 = 0;
soma2++;  //1
soma2 += 2; //3
soma2 += 3; //6

let count = 0;
count = count + 1;
count++;
count += 1;
// count = 3

let count2 = 0;
count2 = count2 - 1; //-1
count2--;  //-2
count2 -= 1; //-3
// count2 = -3

let mult = 1;
mult *= 3;




if(true){
    console.log('Entrou')
}