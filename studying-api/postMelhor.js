const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Criando o usuário que irá ser adicionado

const usuario = {
    name: 'Caio Farias',
    username: 'caiofariaas',
    email: 'caiofarias@gmail.com',
};

// configurando o POST

const configPost = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
};

// função que realiza o POST

function criarNovoUsuario(){

// recebe a URL e a config 

    return fetch(apiURL, configPost)
    .then(response =>{
        if(!response.ok){

// Tratamento de diversos erros diferentes!

            if(response.status == 404){
                throw new Error('Endpoint não encontrado.');
            }
            else if(response.status == 500){
                throw new Error('Erro interno do servidor.');
            }
            else{
                throw new Error(`Erro na requisição, '${response.status}' - ${response.statusText}`);
            }
        }

        return response.json();
    })

// 

    .then(usuario =>{
        console.log('Usuário criado!', usuario);
    })
    .catch(error =>{
        console.error(`Erro: ${error.message}`);
    });
}

criarNovoUsuario();
