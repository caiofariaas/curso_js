// Strings

let umaString = 'um texto e outro texto';

// Pegando apenas o caractere que se encontra no index 4
// Tambem é possivel usar charAt()

console.log(umaString[4], umaString.charAt(5));

// Concatenação
// .concat() funciona da mesma forma que a concatenação usando o '+'

console.log(umaString.concat(" 'concatenado' "));

// usado para descobrir o index da primeira letra de uma palavra na String!
// Caso não encontre nada ele retorna -1

console.log(umaString.indexOf('texto'));

// Tambem é possivel definir um index inicial

console.log(umaString.indexOf('texto', 4));

// Expressões Regulares
// match com [a-z] mostra todas as letras encontradas na string que estão entre 'a' e 'z', é caseSensitive!

console.log(umaString.match(/[a-z]/g));

// search mostra o index da primeira letra entre a condição fornecida
// parecido como indexOf, porem, aceita expressões regulares!

console.log(umaString.search(/x/));

// replace funciona igual python praticamente
// o primeiro parametro é o que você deseja substituir e o segundo é oque entra no lugar!
// funciona com expressões regulares

console.log(umaString.replace("um", "Este"));

// Retorna o tamanho da string

console.log(umaString.length);

// Slice permite que você 'fatie' um pedaço especifico da string
// no exemplo usei a palavra 'texto'
// se usar valores negativos ele procura de trás para frente!

console.log(umaString.slice(3, 8))

// Letra maiuscula e minuscula

console.log(umaString.toLowerCase());
console.log(umaString.toUpperCase());



