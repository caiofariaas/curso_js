// Estudo array's
const alunos = ['Caio', 'Andre', 'João'];

console.log(alunos);

// Adicionar itens a um index especifico do array

alunos[3] = 'Eduardo';
console.log(alunos);

// Como Adicionar itens ao array, sem indice especifico, ele apenas segue a ordem

alunos.push('Luiza');
alunos.push('Fábio');

// Adiciona a primeira posição

alunos.unshift('Maicon');

console.log(alunos);

// remove o ultimo item do array

alunos.pop();

console.log(alunos);

let new_alunos = alunos.slice(0, 3);

console.log(new_alunos);

