
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


console.log(soma(23, 23));

console.log(ehPrimo(2));

console.log(contarVogais("AAA"));