/*
  [ Observar imagem 2-fibonnaci.png com o enunciado do desafio ]

  A sucessão de Fibonacci é uma sequência de números inteiros iniciados por
  zero e um, no qual cada termo subsequente corresponde a soma dos dois 
  números anteriores. Crie um algoritmo que liste até o décimo quinto 
  número da sequência de Fibonnaci.

  Exemplo:
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377

  Passos Lógicos:
  - [x] Criar variáveis para armazenar os valores do numero atual, anterior e proximo
  - [x] Criar um loop que seja executado 15x
  - [x] Mostrar na tela o numero anterior (pois a sequencia inicia em 0)
  - [x] Executar a lógica de criar o proximo numero sendo a soma dos dois anteriores
  - [x] Atualizar cada variável com seu novo valor para o proximo laço do loop
*/
function fibonnaciNumbers() {
  let anterior = 0;
  let atual = 1;
  let proximo;

  for (let i = 1; i <= 15; i++) {
    console.log(anterior);
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }
}

// fibonnaciNumbers();

/*
  Outra forma de resolução Fibonnaci, utilizando arrays
  Passos Lógicos:
  - [] 
  
*/

function fibonnaciArray(n) {
  //                 0  1
  const fibonnaci = [0, 1];

  for (let i = 2; i < n; i++) {
    // começando no indice 2 do array fibonnaci[2]
    // let anterior = fibonnaci[i - 1];
    // let anteriorAoAnterior = fibonnaci[i - 2];
    // const proximo = anterior + anteriorAoAnterior;

    const proximo = fibonnaci[i - 1] + fibonnaci[i - 2];
    fibonnaci.push(proximo);
  }

  return fibonnaci;
}
// const sequenciaFibonnaci = fibonnaciArray(15);
// console.log(sequenciaFibonnaci);

function encontraMaiorNome(arrayNomes) {
  /*
  A função deve encontrar e retornar o maior nome da lista de nomes
  [x] - Percorrer o arrayNomes inteiro
  [] - A cada laço de repetição, verificar se o nomeAtual é maior
  que maiorNome. Se for, reatribuir o valor de maiorNome.
  */
  let maiorNome = "";

  for (let i = 0; i < arrayNomes.length; i++) {
    // let nomeAtual = arrayNomes[i];
    // let tamNomeAtual = nomeAtual.length;
    // let tamMaiorNome = maiorNome.length;

    // console.log("nomeAtual", nomeAtual);
    // console.log("tamNomeAtual", tamNomeAtual);
    // console.log("tamMaiorNome", tamMaiorNome);
    // // console.log(arrayNomes[i]);

    // if (tamNomeAtual > tamMaiorNome) {
    //   maiorNome = nomeAtual;
    // }

    if (arrayNomes[i].length > maiorNome.length) {
      maiorNome = arrayNomes[i];
    }
    // console.log("maiorNome", maiorNome);
  }

  return maiorNome;
}
const arrayNomes = ["Kayan", "Alessandra", "Vilson"];
// console.log(arrayNomes.indexOf("Chrystian"));
// const maiorNome = encontraMaiorNome(arrayNomes);
// console.log(maiorNome);

// ARRAYS ANINHADOS (Matriz / Array Bidimensional)
const arrPai = [
  [100, 200, 300], // Indice 0 (arrPai)
  [400, 500, 600, "M1"], // Indice 1 (arrPai)
  [700, 800, 900, "M2", "M3"], // Indice 2 (arrPai)
];
// console.log(arrPai);
const arrFilhoUm = arrPai[0];

const arrFilhoDois = arrPai[1];
const numero500 = arrFilhoDois[1];
// console.log(numero500);

const m1 = arrFilhoDois[3];
// console.log(m1);
// console.log(arrFilhoDois);

// console.log(arrPai[1][1]);
// console.log(arrPai[1][1]);

// Sempre o for mais interno vai ser executado até o fim primeiro

// For externo
// for (let i = 0; i < arrPai.length; i++) {
//   let filhoAtual = arrPai[i];
//   // console.log("filhoAtual", filhoAtual);
//   // For interno
//   for (let j = 0; j < filhoAtual.length; j++) {
//     // console.log(`filhoAtual[${j}]`, filhoAtual[j]);
//   }
// }

/*
  const matriz1 = [
    ['.', '.'],
    ['.', '.'].
  ]

  const matriz2 = [
    ['.', 'S'],
    ['.', '.'].
  ]
*/

function encontraMaiorNomeMatriz(matriz) {
  let maiorNome = "";

  for (let i = 0; i < matriz.length; i++) {
    let arrayInterno = matriz[i];

    for (let j = 0; j < arrayInterno.length; j++) {
      let nomeAtual = arrayInterno[j];
      let tamNomeAtual = nomeAtual.length;
      let tamMaiorNome = maiorNome.length;
      // console.log(nomeAtual);

      if (tamNomeAtual > tamMaiorNome) {
        maiorNome = nomeAtual;
      }
      // if (nomeAtual.length > maiorNome.length) {
      //   maiorNome = nomeAtual;
      // }

      // console.log(arrayInterno[j]);
      // console.log(matriz[i][j]);

      // Criar um if utilizando somente a variável `matriz`
    }
  }

  return maiorNome;
}

const matrizNomes = [
  ["Thiago", "Alessandra", "Wesley"], // M1
  ["Pedro", "Fernando", "Rafael"], // M2
  ["Alex", "Nicole", "Sarah"], // M3
];

// const maiorNomeMatriz = encontraMaiorNomeMatriz(matrizNomes);
// console.log(maiorNomeMatriz);

const matrizIndex = [[0, 0]];

const matriz1 = [
  ["1", "A"],
  ["2", "2"],
];

const matriz2 = [
  ["A", "A"],
  ["B", "B"],
];

for (let i = 0; i < matriz1.length; i++) {
  for (j = 0; j < matriz1[i].length; j++) {
    let valorMatriz1 = matriz1[i][j];
    let valorMatriz2 = matriz2[i][j];

    if (valorMatriz1 === valorMatriz2) {
      matriz1[i][j] = "Valores Iguais Achados";
      // valorMatriz1 = "Valores Iguais Achados";
      // console.log(valorMatriz1);
      // console.log(valorMatriz2);
      // console.log("Valores Iguais Achados");
    }
  }
}

// console.log(matriz1);
