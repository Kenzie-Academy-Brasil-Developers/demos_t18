//FUNÇÕES INTERNAS OU ANINHADAS

function vaca(){
    function comer(){
        console.log('Nham nham nham');
    }
    function emitirSom(){
        console.log('Muuuuuuuu');
    }

    // comer();
    // emitirSom();
    // comer();
}
// vaca();


function calculadora(a,b,op,flag){
    function somar(n1,n2){
        return n1+n2;
    }
    function subtrair(n1,n2){
        return n1-n2;
    }
    function multiplicar(n1,n2){
        return n1*n2;
    }
    function dividir(n1,n2){
        return n1/n2;
    }
    function verificaOperacao(){
        if(op == '+'){
            return somar(a,b);
        }else if(op == '-'){
            return subtrair(a,b);
        }else if(op == '*'){
            return multiplicar(a,b);
        }else if(op == '/'){
            return dividir(a,b);
        }
        return NaN;
    }

    function showMessage(result){
        alert(`${a} ${op} ${b} = ${result}`);
    }

    let resultado = verificaOperacao();

    if(flag){
        showMessage(resultado);
    }

    return resultado;
}

// calculadora(12,2,'/',true);

function solicitaInformacoe(){
    let n1 = parseFloat(prompt('Digite o primeiro numero')); //'5.5' -> 5.5
    let n2 = parseFloat(prompt('Digite o segundo numero'));  //'4.5' -> 4.5
    let op = prompt('Digite a operação');

    console.log(calculadora(n1,n2,op,true));
}

solicitaInformacoe()