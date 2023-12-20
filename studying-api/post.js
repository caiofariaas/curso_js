// POST

const apiURL = 'https://jsonplaceholder.typicode.com/users';

// criando um objeto 'usuário' para adicionar

const newUser = {
    name: 'Caio Farias',
    username: 'caiofariaas',
    email: 'caiofarias@gmail.com',
};

// configuração da requisição POST
// é um objeto que especifica os métodos, o cabeçalho e o corpo de uma requisição

const configPost = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    
    body: JSON.stringify(newUser),
};

// Função que faz a requisição POST para criar o novo usuário!
// faz a requisição POST, utilizando a URL e a config definida anteriormente!

function userPOST(){
    return fetch(apiURL, configPost)
    .then(response =>{
        if(!response.ok){
            throw new Error(`Error, ${response.status} - ${response.statusText}`)
        }
        return response.json();
    })
    .catch(error =>{
        console.log(`error: ${error.message}`);
    });
}

// após a promessa ser concluida, recebemos a resposta da API que inclui os novos dados do usuário criado!

userPOST()
.then(newUser =>{
    console.log('Novo usuário criado!', newUser)
});
