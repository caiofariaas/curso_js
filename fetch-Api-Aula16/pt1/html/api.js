const characterId = document.querySelector("#characterId");
const btnGo= document.querySelector("#btn-go");
const content = document.querySelector("#content");
const image = document.querySelector("#img");
const btnReset = document.querySelector("#btn-reset");
const containerResult = document.querySelector("#result-style");

// Faz uma requisição na API atraves da função FETCH
// recebe o ID do usuário

const fetchApi = (value) =>{

// Guarda o resultado da FETCH
// fetch é a função que recolhe as informações da API
// Passamos como parametro o ID do personagem

// promise é literalmente uma promessa!
// o 'then()' é usado para pegar oque vem depois de promisse
// Conceitos de códigos assincronos


// Ele pega o resultado do fetch que vem como promisse
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)

// depois transformamos o resultado 'JS' em 'json' que tambem é uma promise
    .then((res) => res.json())

// Quando de fato existir essa saída nos temos o 'data'
// tambem é possivel trazer algo especifico, no exemplo usei o nome retornado em 'data'

    .then((data) => {
        console.log(data)

// esse return manda a info a 'result'

        return data;
    });

// aqui retornamos result como resultado total

    return result;
}

// Usamos o EventListener para ler um click e com isso chamar a função de 'Fetch'

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode'];

const buildResult = (result) =>{

// Criamos um objeto vazio

    const newObject = {};

// Array de getElement's
// e depois um array de elementos selecionados
// faz uma comparação e se ela for verdadeira ele muda o newObject

    keys.map((key) => document.getElementById(key)).map((elem) =>{
        elem.checked && (newObject[elem.name] = result[elem.name])
    });

    return newObject;
}

// async indica que é uma função assincrona!
// por estarmos recebendo um dado de uma API, isso é necessário

btnGo.addEventListener('click', async (e) =>{
    e.preventDefault()
    
    const result = await fetchApi(characterId.value)

// Aqui como estamos tentando inserir um Objeto 'json', precisamos transforma-lo em 'string' 

// utilizando a tag </pre>
// 'undefined' não sei
// 2 para os espaços

    // content.innerHTML =  `${JSON.stringify(result, undefined, 2)}`;

    content.innerHTML = `${JSON.stringify(buildResult(result), undefined, 2)}`;
    image.src = `${result.image}`
})
