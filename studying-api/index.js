
// FUNÇÃO 'GET'


// URL da API

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Função GET

function reqGET(){

// Fazendo a requisição utilizando o fetch!

  fetch(apiUrl)

// 'response' armazenará a resposta da requisição 

    .then(response => {
        if(!response.ok){

// 'status' mostrará o código do erro e o 'statusText' mostrará este erro em forma de texto, por ex: '404 - Not Found'

            throw new Error(`Erro na requisisão: ${response.status} - ${response.statusText}`)
        }
        return response.json();
    })

// 'data' armazena os dados extraidos da resposta

    .then(data => {

// no caso de template strings seria necessario usar o 'JSON.stringify(objetoJson)'

        console.log(`Dados da API:`, data);
    })

// Mensagem de erro!

    .catch(error => {
        console.error('Erro', error.message);
    })
}

// função para exibir apenas o nome e o e-mail de cada user

function exibirNomeEmailUsers(usuarios){
    usuarios.forEach(user => {
        console.log(`Nome: ${user.name}, Email: ${user.email}`)
    });
}

reqGET();