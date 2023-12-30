// Fazendo GET com Front-End

const apiUrl = 'http://127.0.0.1:8000/api/users';
const urlPost = 'http://127.0.0.1:8000/api/create_user';

function getUsers(){
    return fetch(apiUrl)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Erro na requisição '${response.status}' - ${response.statusText}`)
        }
        return response.json();
    })
}

function nomeEmail(users){
    users.forEach(user => {
        console.log(`Nome: ${user.username} - Email ${user.email}`);
    });
}


getUsers()
.then(users =>{
    nomeEmail(users);
});