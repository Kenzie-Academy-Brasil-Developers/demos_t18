/*
  [ Observar imagem 1-palindromo.png com o enunciado do desafio ]

  Receber uma string, verificar se é um palindromo ou nao.
  Retornar true caso sim, false caso não.

  Passos lógicos:
    - [x] inverter a string
    - [x] comparar com a string original
    - [x] comparar frases
      - alguns espaços nao ficam posicionados corretamente
        - [x] Resolve-se removendo os espaços tanto da original quanto da invertida
      - Não diferenciar maiusculas de minusculas
        - [x] Resolve-se modificando a frase toda para maiusculo, ou para minusculo.
    - [x] retornar true / false
*/
function removeSpace(string) {
  let modifiedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      modifiedString += string[i];
    }
  }

  return modifiedString;
}

function isPalindrome(string) {
  let invertedString = "";
  let stringWithoutSpace = removeSpace(string);
  // stringWithoutSpace = stringWithoutSpace.toLowerCase();
  stringWithoutSpace = stringWithoutSpace.toUpperCase();

  // Copiar a string original para stringWithoutSpace
  // for (let i = 0; i < string.length; i++) {
  //   if (string[i] !== " ") {
  //     stringWithoutSpace += string[i];
  //   }
  // }

  // Inverter a string original
  // Desacoplar (colocar em outra função)
  for (let i = 0; i < stringWithoutSpace.length; i++) {
    invertedString = stringWithoutSpace[i] + invertedString;
  }

  console.log(string, "string");
  console.log(stringWithoutSpace, "stringWithoutSpace");
  console.log(invertedString, "invertedString");

  if (stringWithoutSpace === invertedString) {
    return true;
  }

  return false;
}

// const string = "osso";
// const string = "Chrystian";
// const string = "Anotaram a data da maratona";
// const string = "A sAcaDa Da Casa";
// const isPalindromeResult = isPalindrome(string);
// console.log("isPalindromeResult", isPalindromeResult);

/*
  [ Observar imagem 2-fibonnaci.png com o enunciado do desafio ]

  A sucessão de Fibonacci é uma sequência de números inteiros iniciados por
  zero e um, no qual cada termo subsequente corresponde a soma dos dois números
  anteriores. Crie um algoritmo que liste até o décimo quinto número da sequência
  de Fibonnaci.

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

  // console.log(proximo);
}

// fibonnaciNumbers();

function nestedForExample() {
  for (let a = 0; a < 5; a++) {
    console.log("Inicio do laço externo");
    console.log("a =", a);
    for (let b = 0; b < 4; b++) {
      console.log("Inicio do laço interno");
      console.log("a =", a, "/", "b =", b);
      // console.log("b =", b);
    }
    console.log("Fim do laço interno");
    console.log("");
  }
  console.log("Fim do laço externo");
}

// nestedForExample();

/*
  [ Observar imagem 3-piramide-numerica.png com o enunciado do desafio ]

  Crie uma função chamada piramideNumerica(tamanhoPiramide) que receba como 
  argumento um número inteiro e imprima uma pirâmide numérica de tamanho
  tamanhoPiramide na tela.

  Exemplo piramideNumerica(5):
  1 
  1  2 
  1  2  3 
  1  2  3  4 
  1  2  3  4  5

  Passos Lógicos:
  [x] - Criar um loop de 1 até tamanhoPiramide (incluso)
  [x] - Criar um loop interno de 1 até o valor da iteração do loop externo
  [x] - Mostrar os numeros da piramide, mesmo sem ordem.
*/

function piramideNumerica(tamanhoPiramide) {
  for (let i = 1; i <= tamanhoPiramide; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
      linha = linha + j + " ";
    }
    console.log(linha);
  }
}

// const tamanhoPiramide = 10;
// piramideNumerica(tamanhoPiramide);

// ARRAY
// indice              0   1   2   3   4
const primeiroArray = [10, 20, 30, 40, 50];
// console.log(primeiroArray.length);
// console.log(primeiroArray);
// console.table(primeiroArray);
// console.log(primeiroArray[0]);
// console.log(primeiroArray[1]);
// console.log(primeiroArray[100]);
// primeiroArray[0] = 100;
// console.log(primeiroArray[0]);
// console.log(primeiroArray);

// indice             0    1   2    3     4
const segundoArray = [10, "B", 3.7, true, "M1"];

const tamanhoArr2 = segundoArray.length;
const ultimoIndiceArr2 = tamanhoArr2 - 1;
// console.log(tamanhoArr2);
// console.log(segundoArray[ultimoIndiceArr2]);

// Adicionando elementos
// PUSH (fim do array)
const terceiroArray = [];
// console.log(terceiroArray);
terceiroArray.push("Kayan");
// console.log(terceiroArray);
terceiroArray.push("Lorena");
// console.log(terceiroArray);

// UNSHIFT (adiciona no inicio)
terceiroArray.unshift("Chrystian");
// console.log(terceiroArray);
// console.table(terceiroArray);

// Remover elementos
// pop (remover do fim)
let valorRemovido = terceiroArray.pop();
// console.log(terceiroArray);
// console.log(valorRemovido);

// shift (remover do inicio)
valorRemovido = terceiroArray.shift();
// console.log(terceiroArray);
// console.log(valorRemovido);

const novoTamanhoArr3 = terceiroArray.push("Alessandra", "Wesley");
// console.log(terceiroArray);
// console.log(novoTamanhoArr3);

const users = [];
let username = "";

// while (username.toLowerCase() !== "sair") {
//   username = prompt("Digite um nome:");
//   users.push(username);
//   // if (username.toLowerCase() !== "sair") {
//   //   users.push(username);
//   // }
// }
// sAir
// SAir

// users.pop();
// console.log(users);

function showArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// const array = ["M1", "M2", "M3", "M4", "M5"];
// showArrayValues(array);

function searchArray(array, wordToSearch) {
  const indexArr = [];

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    if (array[i] === wordToSearch) {
      // return "Valor encontrado no indice " + i;
      indexArr.push(i);
    }
  }

  if (indexArr === []) {
    return "Valor não encontrado";
  }
  console.log(indexArr);
  return "Valor encontrado no indice " + indexArr;
}

// const instructorArray = ["Luiz", "Alessandra", "Vilson"];
const instructorArray = ["Luiz", "Alessandra", "Vilson", "Vilson"];
// const searchWord = "Luiz";
// const searchWord = "Thiago";
// const searchWord = "Alessandra";
const searchWord = "Vilson";

// const searchResult = searchArray(instructorArray, searchWord);
// console.log(searchResult);

function stringCentralizer(text, numRepeat, textRepeat) {
  let result = ` ${text} `;

  // for (let i = 0; i < numRepeat; i++) {
  //   console.log(result);
  //   result = textRepeat + result + textRepeat;
  // }
  let reptElement = textRepeat;
  for (let i = 0; i < numRepeat; i++) {
    reptElement += textRepeat;
  }

  return reptElement + result + reptElement;
}

// const stringResult = stringCentralizer("JavaScript", 4, "=");
// console.log(stringResult);
// Retorna "======== JavaScript ========"

const arr100 = [100, 200];
const arr200 = [300, 400];

const arr300 = arr100.concat(arr200);
console.log(arr300);
