const pessoa1 = {
    nome: 'Caio',
    sobrenome: 'Farias',
    idade: '18'
};

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

function criarPessoa(nome, sobrenome, idade){
    return{nome, sobrenome, idade};
};

const pessoa2 = criarPessoa('Caio', 'Farias', 18);
const pessoa3 = criarPessoa('Andre', 'Freitas', 18);
const pessoa4 = criarPessoa('Murilo', 'Poltronieri', 18);

console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
