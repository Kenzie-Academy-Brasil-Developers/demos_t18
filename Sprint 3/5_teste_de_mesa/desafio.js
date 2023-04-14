// Desafio do login: Crie um sistema de login que solicita ao usuário seu nome de usuário e senha. Se o nome de usuário e a senha estiverem corretos, exiba uma mensagem de boas-vindas. Caso contrário, exiba uma mensagem informando que o nome de usuário ou a senha estão incorretos.

let username = prompt('Digite seu username:'); //Gabriel
let password = prompt('Digite sua senha:');    //9876
 
if(username == 'Gabriel' && password == '9876'){
    alert(`Seja bem vindo ${username}`);
}else{
    alert(`O nome ${username} não está disponivel ou a senha ${password} está incorreta`);
}



// Desafio do jogo de dados: Crie um jogo de dados simples em que o usuário jogue um dado e tente adivinhar se o próximo número será maior ou menor. Se o usuário acertar, exiba uma mensagem de parabéns. Caso contrário, exiba uma mensagem informando que ele perdeu. Você pode usar a função Math.random() para gerar os números aleatórios.

let valorRandomizado = parseInt((Math.random() * 6) + 1);

let sugestao = parseInt(prompt('Teste sua sorte, digite um numero de 1 a 6'));

if(valorRandomizado == sugestao){
    alert(`Parabéns, você acertou! O numero do dado foi ${valorRandomizado}`);
}else{
    alert(`Não foi dessa vez! Você digitou ${sugestao} mas o dado parou na posição ${valorRandomizado}`);
}



// Desafio da senha segura: Crie um formulário de cadastro que solicita ao usuário um nome de usuário e uma senha. A senha deve ter pelo menos oito caracteres Use condicionais para verificar se a senha atende a esses critérios e exiba uma mensagem de erro caso contrário.

let usrname = prompt('Digite seu username');

if(usrname == 'Gabriel'){
    alert(`O nome ${usrname} já está sendo utilizado!`);
}else{
    let pass = prompt('Digite a sua senha');
    //1234Th@-
    if(
        pass.length < 8 || //Quantidade de caracteres
        (
            !pass.includes('@') && 
            !pass.includes('!') && 
            !pass.includes('&') 
        ) ||
        pass.toLowerCase() == pass ||  //Verficando a existencia de texto maiusculo
        pass.toUpperCase() == pass     //Verficando a existencia de texto minusculo
    ){
        alert(`SENHA FRACA`);
    }else{
        alert('Cadastro efetuado com sucesso');
    }
}
