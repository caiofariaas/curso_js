// Consumindo minha API com Front-End

const apiUrl = 'http://127.0.0.1:8000/api/users';
const urlPost = 'http://127.0.0.1:8000/api/create_user';
const urlDelete = 'http://127.0.0.1:8000/api/delete_user/';

//  get all users

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

// Method POST

function createUser(id, username, email, full_name){
    const data = {
        id : id,
        username: username,
        email: email,
        full_name: full_name
    };

    return fetch(urlPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText}`)
        }
        return response.json();
    }); 
}

// usando a função para criar usuários

// createUser(4, 'julyaMor', 'juuu@gmail.com', 'Julya Jacometti')
// .then(responseData =>{
//     console.log('User criado com sucesso:', responseData)
// })
// .catch(error=>{
//     console.error('Erro ao criar o usuário:', error)
// })

// DELETE

function deleteUser(userId){
    return fetch(`${urlDelete}${userId}`,{
        method: 'DELETE',
        headers: {

        },
    })
    .then(response =>{
        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText}`)
        }
        return response.json()
    });
}
// Usando DELETE

deleteUser(0)
.then(responseData =>{
    console.log('Usuario deletado com sucesso:', responseData)
})
.catch(error=>{
    console.error('Erro:', error)
})

// retorna a nova lista

getUsers()
.then(users =>{
    nomeEmail(users);
});
