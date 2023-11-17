// Calcular IMC
// Prompt é um alert porem com entrada de dados!
// Está mais aprofundado na Aula 3

let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade: ");
let peso = prompt("Digite seu peso em kg");
let alturaEmMetro = prompt("Digite sua altura em M");
let imc;

imc = peso/(altura*altura)

// Função toFixed é usada para formatar numeros, o valor inserido é a quantidade de números após a virgula
// Forma ideal!

console.log(`Seu nome é ${nome} você tem ${idade} anos e seu imc é ${imc.toFixed(2)}`);

// Forma não ideal

console.log('Seu nome é', nome, 'você tem', idade, 'anos e seu imc é', imc.toFixed(2));
