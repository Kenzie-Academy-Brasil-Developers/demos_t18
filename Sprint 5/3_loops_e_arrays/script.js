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

fibonnaciNumbers();

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

  Crie uma função chamada piramideNumerica(tamanhoPiramide) que receba como argumento 
  um número inteiro e imprima uma pirâmide numérica de tamanho tamanhoPiramide na tela.

  Exemplo piramideNumerica(5):
  1 
  1  2 
  1  2  3 
  1  2  3  4 
  1  2  3  4  5

  Passos Lógicos:
  (...)
*/
