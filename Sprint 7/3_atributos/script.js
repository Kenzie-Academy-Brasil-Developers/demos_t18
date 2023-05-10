let listAncoras = document.querySelectorAll('a');

//setAttribute
for(let i = 0; i<listAncoras.length ; i++){
    let ancora = listAncoras[i];
    ancora.setAttribute('target', '_blank');
}

//getAttribute
for(let i = 0; i<listAncoras.length ; i++){
    let ancora = listAncoras[i];
    let target = ancora.getAttribute('target');
    console.log(target);
}

//removeAttribute
for(let i = 0; i<listAncoras.length ; i++){
    let ancora = listAncoras[i];
    ancora.removeAttribute('class');
    // ancora.removeAttribute('id');
}

console.log(listAncoras);

//classList
//ancoraVerde, uppercase

document.querySelector('#btn_green').addEventListener('click',function(){
    let ancoras = document.querySelectorAll('a');
    for(let i = 0; i < ancoras.length ; i++){
        let ancora = ancoras[i];
        ancora.classList.remove('ancoraAzul');
        ancora.classList.add('ancoraVerde');
    }

});

document.querySelector('#btn_blue').addEventListener('click',function(){
    let ancoras = document.querySelectorAll('a');
    for(let i = 0; i < ancoras.length ; i++){
        let ancora = ancoras[i];
        ancora.classList.remove('ancoraVerde');
        ancora.classList.add('ancoraAzul');
    }
})

document.querySelector('#btn_upper').addEventListener('click',function(){
    let ancoras = document.querySelectorAll('a');
    for(let i = 0; i < ancoras.length ; i++){
        let ancora = ancoras[i];
        ancora.classList.toggle('uppercase');
    }
})

function zeraClassesCor(elemento){
    elemento.classList.remove('ancoraAzul');
    elemento.classList.remove('ancoraVerde');
    elemento.classList.remove('ancoraVermelha');
    elemento.classList.remove('ancoraCinza');
}

function verificaClass(list, classe){
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] == classe){
            return true;
        }
    }
    return false;
}