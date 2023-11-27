// Problematica de VAR, é possivel redeclarar uma variavel, o LET corrigiu isso!

var nome = "luiz";
var nome = "Caio";

// Variavel global, pode colidir com outras variaveis, não utilize
// obrigatoriamente use let ou const

nomeGlobal = "Caio";

console.log(nome);

// Correto

let nomeCerto = "Caioo";
nomeCerto = "Novo Nome";

console.log(nomeCerto);
