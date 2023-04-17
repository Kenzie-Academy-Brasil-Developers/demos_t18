// function nomeDaFuncao(){
// //Instruções
// }

let nome = 'Thiago';

function padronizaMensagem(){
    console.log(`Seja bem vindo ${nome}`);
}

padronizaMensagem();



//----------------------------------

function calculadora(a,b,op){
    if(op == '+'){
        return a+b;
    }else if(op == '-'){
        return a-b;
    }else if(op == '*'){
        return a*b; 
    }else if(op == '/'){
        return a/b;
    }else if(op == '='){
        return calculadora(a,b,'+');
    }
    else{
        alert('Operador inválido');
    }
}

let num1 = parseFloat(prompt('Digite o primeiro numero'));
let num2 = parseFloat(prompt('Digite o segundo numero'));
let operacao = prompt('Digite a operação a ser realizada');
calculadora(num1, num2, operacao);  

let resultado = calculadora(num1, num2, operacao);
console.log(resultado);

console.log(calculadora(2,5,'-')); // -3
console.log(calculadora(12,3,'/')); // 4
console.log(calculadora(7,3,'+')); // 10
console.log(calculadora(3,3,'*')); // 9




function soma(a,b){
    return a+b;
}

function subtrai(a,b){
    return a-b;
}

function calcula(a,b,op){
    if(op == '+'){
        return soma(a,b)
    }else if(op == '-'){
        return subtrai(a,b)
    }
}

console.log(calcula(12,6,'-'));


//CALCULADORA DE IMC
//IMC = peso / (altura * altura)

//receber 2 parametros (peso, altura)
//retornar o IMC

let pesoUser = parseInt(prompt('Digite o seu peso'));
let alturaUser = parseFloat(prompt('Digite a sua altura'));

function calculaIMC(peso, altura){
    let imc = peso / (altura * altura)

    return imc.toFixed(2);
}

console.log(calculaIMC(pesoUser, alturaUser))



function montaString(txt){
    return `Seja bem vindo ${txt}`
}

let result = montaString('Kenzie');


