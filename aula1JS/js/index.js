// Calc IMC
// prompt é um alert porem com entrada de dados!

let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade: ");
let peso = prompt("Digite seu peso em kg");
let alturaEmMetro = prompt("Digite sua altura em M");
let imc;

imc = peso/(altura*altura)

// Forma ideal!

console.log(`Seu nome é ${nome} você tem ${idade} anos e seu imc é ${imc.toFixed(2)}`)