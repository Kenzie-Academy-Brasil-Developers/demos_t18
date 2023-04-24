/*
  Estruturas de Repetição
  - Inicializador
  - Condição de parada
  - Incremento/Decremento
*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

/*
  While

  while (condição) {
    // Bloco de código
  }
*/
// Inicializador
// let i = 1;

// // Condição de parada i <= 5
// while (i <= 5){
//   console.log(i);
//   // i = i + 1 -> i += 1
//   i++;
// }

// console.log("Fim do While")


/*
  For
  for (inicialização; condição de parada; incremento/decremento){
    // Bloco de código
  }
*/
// for (let i = 1; i <= 5; i++){
//   console.log(i);
// }
// console.log(i);
// console.log("Fim do For");

// i-- -> i = i - 1 -> i -= 1
// for (let i = 10; i >= 1; i--){
//   console.log(i);
// }

function numerosPares(){
  // i -> Index -> Indice
  console.log("Inicio");
  let resultadoSemPuloDeLinha = "";
  for (let index = 0; index <= 8; index++){
    // % (Mod) -> Resto da divisão
    if (index % 2 == 0){
      // \n
      // console.log(`O numero ${index} é par.`);
      resultadoSemPuloDeLinha += `O numero ${index} é par.`;
    }
  }
  console.log(resultadoSemPuloDeLinha);
  console.log("Fim");
}
// numerosPares()

function somarNumeros(tamanhoDoLaco){
  // Somar todos os numeros da contagem
  let soma = 0;
  for (let index = 0; index <= tamanhoDoLaco; index += 10){
    // console.log(index);
    soma += index;
  }
  console.log('Saiu do Loop');
  console.log(soma);
}
// 0 + 1 + 2 + 3 + 4 + 5
// somarNumeros(5);

// Assinatura: function tabuada(numero)
// parametros -> numero
function tabuada(numero){
  for (let i = 1; i <= 10; i++){
    let result = numero * i;
    console.log(`${numero} x ${i} = ${result}`);
  }
}
// console.log(numero)
// Argumento
// let numero = 2;
// tabuada(numero);
// tabuada(2);

function solicitaInformacoes(){
  let info1 = ""
  while (info1 != "Sair"){
    info1 = prompt("Digite uma informação:");
    console.log(`A informação digitada foi ${info1}`);
  }
  console.log('saiu do loop while');

  // Equivalente ao trecho acima
  // let info1 = ""
  // while (true){
  //   let info1 = prompt("Digite uma informação:");
  //   console.log(`A informação digitada foi ${info1}`);
  //   if (info1 == 'Sair'){
  //     break;
  //   }
  // }
  // console.log('saiu do loop while');
  
}
// solicitaInformacoes();
