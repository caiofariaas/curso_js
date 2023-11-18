// Como transformar um número em uma String?

let num1 = 1; //number
let num2 = 2.5; //number

// Função toString transforma o valor em uma String temporariamente(apenas quando é chamado!)
console.log(num1.toString() + num2.toString());

// typeof mostra o tipo da variavel

console.log(typeof num1, typeof num2);

// Neste caso nós tranformamos o numero em uma string permanentemente!

num1 = num1.toString();

console.log(typeof num1);

// Como arredondar valores e mostrar a quantidade de casas decimáis que quiser.
// função toFixed(), recebe como parametro a quantidade de casas decimáis

let num3 = 10.27834;

console.log(num3.toFixed(2));

// Como verificar se um número é inteiro
// Função Number.isInteger()
// Retorna true or false

console.log(Number.isInteger(num3));

// Como verificar se uma conta é invalida?
// Função Number.isNaN()
// caso retornar True, a conta esta incorreta e caso ela retorne False, a conta esta correta!

let temp = num1 * 'a';

console.log(Number.isNaN(temp));

// Objeto MATH!

let num23 = 9.4934;

// Arredonda o valor para baixo!
// Math.floor()

let arredondar = Math.floor(num23);
console.log(arredondar);

// Arredonda o valor para cima!
// Math.ceil()

arredondar = Math.ceil(num23);
console.log(arredondar);

// Arredonda para o valor mais proximo!
// Math.round()

arredondar = Math.round(num23);
console.log(arredondar);

// Retornar o maior e o menor número dentre uma lista!
// Math.max() e Math.min()
// '...' é um operador usado para espalhar os elementos do array como parametros para a função!

let lista = [2,5,6,45,345,6346,6456456];

console.log(Math.max(...lista));
console.log(Math.min(...lista));

// Sorteio de número aleatório!
// Math.random()
// A função Math.random() sorteia um valor entre 0 e 1!
// Para sortearmos um número aleatório presente em uma lista, será necessario primeiro sortear um indice! e após sortear o indice busca-lo no array.
// Desta forma conseguimos sortear um valor presente em uma lista!

let indiceAleatório = Math.floor(Math.random() * lista.length);
console.log(lista[indiceAleatório]);

// Pi em JS

Math.PI

// Números elevados a outros
// Math.pow() espera o numero principal e a qual deseja eleva-lo
// 2 ** 10, desta forma temos o mesmo funcionamento!

console.log(Math.pow(2, 10));
console.log(2 ** 10);
