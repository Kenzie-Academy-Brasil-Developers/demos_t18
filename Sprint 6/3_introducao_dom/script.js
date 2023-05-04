//DOM - Document Object Model

// let color = prompt('Digite um cor');
let color = '#aaa';
window.document.body.style = `background: ${color}`;

// window.document.write('Kenzie Academy');

// let title = prompt('Digite um titulo para o site');
let title = 'demo DOM'
document.title = title;


//Seletores
let titulo = document.querySelector('#titulo');
titulo.style = `color: white;`;

let texto = document.querySelector('.texto');
texto.style = `font-weight: bold;`;

let ancora = document.querySelector('a');
ancora.style = `text-decoration: none;`;

let divs = document.querySelectorAll('div');
console.log(divs);

for(let i = 0 ; i < divs.length ; i++){
    let div = divs[i];
    div.innerHTML = '<p>Atualizado</p>';
}

console.log(document.getElementById('div'));
console.log(document.getElementsByClassName('div'))
console.log(document.getElementsByTagName('div'))


