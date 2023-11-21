// Funções em JS

function saudacoes(){

};

saudacoes();

// é possivel criar funções dentro de variváveis

const raiz = function(n){
    // seu codigo
    return n ** 2;
};

console.log(raiz(9));

// arrow function
// Funciona da mesma forma
// caso exista apenas um parametro não é necessario o uso de parenteses
// arrow function não precisa ser chamada, ela se auto-executa

const raizz = n => n ** 2;

console.log(raizz(23));