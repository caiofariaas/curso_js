// Manipulação de resultados

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Função que faz a requisição GET da API

function obterListaUser(){
    return fetch (apiUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Erro na requisição '${response.status}' - ${response.statusText} `);
        }
        return response.json();
    })
}

// função responsável por procurar e mostrar o email e o nome dos usuários

function nomeEmailUser(users){
    users.forEach(user => {
        console.log(`Nome: ${user.name} - Email ${user.email}`);
    });
}

//  chamamos a função obterListaUser()
// usamos o 'then' para quando a promise for resolvida nós chamarmos a função responsável por 
// mostrar apenas o nome e o email do usuário

// ao invés de passarmos todo o 'data' passamos apenas oque queremos
// isso é uma manipulação de dados com API

obterListaUser()
.then(users =>{
    nomeEmailUser(users);
});
