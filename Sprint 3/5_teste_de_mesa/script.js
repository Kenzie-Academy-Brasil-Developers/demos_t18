//TESTE DE MESA

let soma = 12;
soma += 15;
soma = soma / 27;
soma *= 15;
soma -= 3;
soma = soma / 4; 

console.log(soma);


let peso = 75;
let altura = 1.70;
let imc = peso / (altura * altura);

let imcIdeal = 25;

let imcDiferenca = imcIdeal - imc;

if(imcDiferenca > 1 || imcDiferenca < -1){
    console.log('Precisa ajustar o peso');
}else{
    console.log('Pode participar da competição')
}

let acesso = false;
let nome = prompt('Nome');

if(nome == 'Thiago'){
    let senha = prompt('Senha');
    if(senha == '1234'){
        let idade = parseInt(prompt('Idade'));
        if(idade >= 18){
            let instituicao = prompt('Instituição');
            if(instituicao == 'Kenzie'){
                acesso = true;
            }
        }
    }
}else if(nome == 'Gabriel'){
    let senha = prompt('Senha');
    if(senha == '9876'){
        let idade = parseInt(prompt('Idade'));
        if(idade >= 18){
            let instituicao = prompt('Instituição');
            if(instituicao == 'Kenzie'){
                acesso = true;
            }
        }
    }
}

if(acesso){
    alert('Você tem acesso')
}else{
    alert('Sem acesso ao portal')
}