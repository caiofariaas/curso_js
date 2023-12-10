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

// Função que espera um array e retorna a soma do quadrado dos números pares
// ESTUDAR DNV

const somaQuadradosPares = (numeros) => {

// 'reduce' é usada para iterar sobre o array de 'numeros'

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


// Utilizando a função 'map' para criar um novo array com o quadrado 
// dos números de um array existente

// o método map não modifica o array anterior, ele cria um novo!

const numeros = [1,2,3,4,5];

const quadrados = numeros.map((numero) =>{
    return  numero ** 2;
});

console.log(quadrados);

// Exemplo de 'map' com objetos
// Pessoas é um array de objetos 'Pessoa'
// Criamos um método 'map' que itera sob pessoas com um objeto
// 'pessoa' (parametro)
// o método map cria um array chamado 'nomes' que itera sob 'pessoas' e guarda apenas o nome delas nesse novo array! 

const pessoas =[
  {nome: 'João', idade: 25},
  {nome: 'Maria', idade: 30},
  {nome: 'Carlos', idade: 22}
];

const nomes = pessoas.map((pessoa) => {

// O return dentro do método devolve para o proprio array!

  return pessoa.nome;
});

console.log(nomes);
