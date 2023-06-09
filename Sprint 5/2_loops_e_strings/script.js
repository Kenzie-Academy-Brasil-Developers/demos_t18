// const myString = "Olá Kenzie!";

// console.log(myString[0]);
// console.log(myString[1]);
// console.log(myString[2]);
// console.log(myString[3]);
// console.log(myString[4]);
// console.log(myString[5]);
// console.log(myString[6]);
// console.log(myString[7]);
// console.log(myString[8]);
// console.log(myString[9]);
// console.log(myString[10]);

const myString = "Olá Kenzie!";
// console.log(myString.length);
// 11

// for (let i = 0; i < myString.length; i++) {
//   console.log(myString[i]);
// }

// for (let i = myString.length - 1; i >= 0; i--) {
//   console.log(myString[i]);
// }

/*
  Escreva uma função que recebe uma string e
  uma letra, procure a letra na string e a torna
  maiuscula se encontrada, retornando a string modificada.

  Passos lógicos:
  - [x] Iterar sobre a string [x]
  - [x] Encontrar a letra procurada 
  - [x] Trocar a letra encontrada para maiusculo 
    - Não consigo alterar a letra da string diretamente
  - [x] Criar uma string nova para preenche-la
  - [x] Adicionar as letras da string original a nova string
  - [x] Caso seja a letra encontrada, antes de adiciona-la, transformá-la em maiuscula
  - [x] Retornar a nova string
*/

// Exemplo de === vs ==
function upperCaseLetter(string, letterToUpperCase) {
  let modifiedString = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === letterToUpperCase) {
      modifiedString += string[i].toUpperCase();
    } else {
      modifiedString += string[i];
    }
    // console.log("string ", string);
    // console.log(modifiedString);
    // console.log("modifiedString ", modifiedString);
  }

  return modifiedString;
}

const str = "casa";
const upperCaseLetterResult = upperCaseLetter(str, "a");
// const upperCaseLetterResult = upperCaseLetter("casa", "a");
// console.log("upperCaseLetterResult", upperCaseLetterResult);
// console.log(upperCaseLetterResult);

/*
  Receber uma string, verificar se é um palindromo ou nao.
  Retornar true caso sim, false caso não.

Passos lógicos:
  - inverter a string
  - comparar com a string original
  - retornar true / false

*/
function isPalindrome(string) {
  let invertedString = "";

  for (let i = 0; i < string.length; i++) {
    // console.log("invertedString", invertedString);
    // console.log(string[i]);
    invertedString = string[i] + invertedString;
    // console.log(invertedString);
  }

  // console.log("string", string);
  console.log("invertedString", invertedString);

  if (string === invertedString) {
    return true;
  }

  return false;
}

// const string = "osso";
const string = "Chrystian";
const isPalindromeResult = isPalindrome(string);
console.log("isPalindromeResult", isPalindromeResult);
