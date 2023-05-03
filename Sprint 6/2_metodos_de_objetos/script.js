//Propriedades

//Atributos
const produto = {
    tipo: "Alimento",
    nome: "Feijão Carioca",
    valor: 5.49,
    unidade: "kg",
    quantidade: 1
}

//Métodos
let gato = {
    som: 'Mrinhau',
    miar: function(){
        console.log(this.som);
    },
    ronronar: function(){
        console.log('RonRonRon');
    }
}

// gato.ronronar();

function miar(som){
    console.log(som);
}
// miar();


function calculadora(a,b,op){
    if(op == '+'){
        return a+b;
    }else if(op == '-'){
        return a-b;
    }else if(op == '*'){
        return a*b;
    }else if(op == '/'){
        return a/b;
    }
}
// console.log(calculadora(3,4,'-')); //-1
// console.log(calculadora(5,2,'+')); // 7

let objCalc = {
    a: 12,
    b: 3,
    somar: function(){
        return this.a + this.b;
    },
    subtrair: function(){
        return this.a - this.b;
    },
    multiplicar: function(){
        return this.a * this.b;
    },
    dividir: function(){
        return this.a / this.b;
    },
}

console.log(objCalc.somar())
console.log(objCalc.subtrair())
console.log(objCalc.multiplicar())
console.log(objCalc.dividir())


//Função
function formatNumber_2decimals(n){
    console.log(this);
    let num = n.toFixed(2);
    return parseFloat(num)
}
formatNumber_2decimals(3.141517);

function formatNumber_percentageToUnity(n){
    let percent = n/100;
    return percent;
}

//Método
let pet = {
    especie: 'Gato',
    nome: 'Felicia',
    som: 'Miauuuuuu',
    emitirSom: function(){
        console.log(this.som);
    }
}
console.log(pet.miar());
console.log(pet.especie);

// método -> ações
// atributos -> caracteristicas


const pets = [
    {
        especie: 'Gato',
        nome: 'Felicia',
        som: 'Miauuuuuu',
        emitirSom: function(){
            return this.som;
        }
    },
    {
        especie: 'Cão',
        nome: 'Dogão',
        som: 'AuAuau',
        emitirSom: function(){
            return this.som;
        }
    },
    {
        especie: 'Periquito',
        nome: 'Carlos',
        som: 'PiiuPiu',
        emitirSom: function(){
            return this.som;
        }
    }
];


function countEspecie(especie){
    let count = 0;
    for(let i = 0; i < pets.length ; i++){
        let pet = pets[i];
        if(pet.especie == especie){
            count++;
        }
    }
    return `${count} são ${especie}s`;
}

console.log(countEspecie('Gato'));


function procuraPet(especie, nome){
    for(let i = 0 ; i<pets.length ; i++){
        let pet = pets[i];
        if(especie == pet.especie && nome == pet.nome){
            return pet.emitirSom();
        }
    }
    return 'Pet perdido ou não encontrado';
}
console.log(procuraPet('Gato','Felicia'));


