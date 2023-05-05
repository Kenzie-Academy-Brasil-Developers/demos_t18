let p1 = document.querySelector('p');
let p2 = document.querySelector('.paragrafo');
let p3 = document.querySelector('#parag1');

// console.log(p1,p2,p3);

let section = document.createElement('section');

section.appendChild(p1);
section.appendChild(p2);
section.appendChild(p3);

section.append(p1,p2,p3);

section.id = 'primeiraSection'

// section.style = `display: none`;

// console.log(section);

const body = document.querySelector('body');
body.appendChild(section);

//Criar uma tag p e adiciona-la na página
let parag = document.createElement('p');

parag.innerText = "Kenzie Academy Brasil";

parag.setAttribute('name', 'titulo');

parag.setAttribute('class', 'titulo-inicio');

parag.classList.add('teste');
parag.classList.add('demo');
parag.classList.remove('titulo-final');

parag.className = 'tituloComClassName';

// console.log(parag);
body.appendChild(parag);




let usuarios = [
    {
        nome: 'Thiago',
        idade: 25,
        cargo: 'Instrutor'
    },
    {
        nome: 'Gabriel',
        idade: 23,
        cargo: 'Estudante'
    },
    {
        nome: 'Felipe',
        idade: 28,
        cargo: 'Estudante'
    },
    {
        nome: 'Karen',
        idade: 18,
        cargo: 'Estudante'
    },
    {
        nome: 'Lorena',
        idade: 26,
        cargo: 'Instrutor'
    }
];

let ul = document.querySelector('#listaUsers ul');

for(let i = 0; i < usuarios.length ; i++){
    let user = usuarios[i];

    let li = document.createElement('li');

    li.id = `li_${i}`;

    li.innerHTML = `${user.nome} tem ${user.idade} anos de idade e possui o cargo de ${user.cargo}`;
    // li.innerHTML = JSON.stringify(user);

    ul.appendChild(li);
}



//1. Criar uma elemento
//2. Configurar o elemento criado
//3. Montar a hierarquia interna dos elementos
//4. Adicionar os elementos criados em um elemento já presente na tela