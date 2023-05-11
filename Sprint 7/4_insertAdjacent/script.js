//InserAdjacentHTML
//InserAdjacentElement

let section = document.querySelector('#products');

let p = document.createElement('p');
p.innerText = 'Inserido pelo append';

section.append(p);



section.insertAdjacentHTML("beforebegin", `<p> Antes da section (beforebegin) </p>`);

section.insertAdjacentHTML("afterbegin", `<p> Dentro, antes do primeiro filho (afterbegin) </p>`);

section.insertAdjacentHTML("beforeend", `<p> Dentro, após o ultimo filho (beforeend) </p>`);

section.insertAdjacentHTML("afterend", `<p> Após a section (afterend) </p>`);


let p1 = document.createElement('p');
p1.innerText = 'Paragrafo de teste';

section.insertAdjacentElement("afterend", p1);



//DataSet
let li_1 = document.querySelector('#user_1');
let nome_1 = li_1.getAttribute('nome');
let sobrenome_1 = li_1.getAttribute('sobrenome');
let idade_1 = li_1.getAttribute('idade');
let cidade_1 = li_1.getAttribute('cidade');

let obj_1 = {
    nome: nome_1,
    sobrenome: sobrenome_1,
    idade: idade_1,
    cidade: cidade_1
}
console.log(obj_1);


let li_2 = document.querySelector('#user_2');
let obj_2 = li_2.dataset;
console.log(obj_2);

obj_2.idade = "30";

delete obj_2.idade;

let aux = document.querySelector('#aux');
aux.insertAdjacentElement('afterend', li_2);

document.querySelector('#input__submit').addEventListener('click', function(e){
    let nome = document.querySelector('#input__name').value;
    document.querySelector('body').insertAdjacentHTML('beforeend',`<p id="user_${nome}" data-nome="${nome}" >${nome}</p>`);
    document.querySelector('#input__name').value = "";
})