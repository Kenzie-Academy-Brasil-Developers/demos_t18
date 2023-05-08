let btn_show = document.querySelector('#show');
let btn_hide = document.querySelector('#hide');
let p = document.querySelector('#parag');
let section = document.querySelector('.section');
let body = document.querySelector('body');
let html = document.querySelector('html');

function eventShowClick(e){
    // console.log(e.composedPath());
    p.classList.remove('hidden');
    console.log('Click');
}

btn_show.addEventListener('click', eventShowClick);

btn_show.addEventListener('dblclick',function(e){
    // console.log(e.composedPath());
    // p.classList.remove('hidden');
    console.log('Double click');
})

btn_hide.addEventListener('click',function(e){
    p.classList.add('hidden');
})

section.addEventListener('click', function(e){
    console.log('Clicou na section');
})

body.addEventListener('click', function(e){
    console.log('Acionou o click no body');
})

html.addEventListener('click', function(e){
    console.log('Acionou no HMTL');
})

//CAPTURING

//BUBBLING

//Simulação do evento da tag de âncora <a>
let redirect = document.querySelector('#redirect');
redirect.addEventListener('click', function(e){
    let href = e.target.getAttribute('href');

    window.location.href = href;
})