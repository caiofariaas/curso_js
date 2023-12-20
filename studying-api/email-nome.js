
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Função recebendo 

function obterListaUser(){
    return fetch (apiUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Erro na requisição '${response.status}' - ${response.statusText} `);
        }
        return response.json();
    })
}

function nomeEmailUser(users){
    users.forEach(user => {
        console.log(`Nome: ${user.name} - Email ${user.email}`);
    });
}

obterListaUser()
.then(users =>{
    nomeEmailUser(users);
});
