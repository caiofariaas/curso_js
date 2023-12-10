
function soma (a, b){
    return a + b;
}

// Verificando números primos

function ehPrimo(num){
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i == 0){
            return false
        }
    return true
}

// Função que conta as vogais de uma frase

function contarVogais(txt) {
    let contador = 0;

    // percorre todos os caracteres do txt
  
    for (let i = 0; i < txt.length; i++) {

      // Use txt.charAt(i) para obter o caractere na posição i
      // Use toUpperCase() para converter o caractere para maiúsculo
      // Includes verifica se existe no array indicado!

      if (["A", "E", "I", "O", "U"].includes(txt.charAt(i).toUpperCase())) {
        contador++;
      }
    }
    return contador;
  }

//  Função que espera um array e retorna a soma do quadrado dos números pares
// ESTUDAR DNV

const somaQuadradosPares = (numeros) => {

//  'reduce' é usada para iterar sobre o array de 'numeros'

    return numeros.reduce((soma, numero) => {

      if (numero % 2 === 0) {
        return soma + numero ** 2;
      } 
      else {
        return soma;
      }
    }, 0);
};

console.log(soma(23, 23));
console.log(ehPrimo(2));
console.log(contarVogais("Hello World"));
