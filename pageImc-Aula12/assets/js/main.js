const form = document.querySelector('#formulario')

// Adicionando uma função anonima junto ao addEvent...

form.addEventListener('submit', function(e){

// Impede que eventos padrões sejam executados, por exemplo o reload da pagina

    e.preventDefault();

// e.targer indica quem está recebendo este evento
// no caso colocamos o ID do elemento
// retorna o elemento todo

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

// Transforma os valores dos input's a um Number

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

// se peso não for 'true' ele mostra o resultado como inválido
// faz o mesmo com altura, caso ambos não aconteçam, ele executa o IMC

    if(!peso){
        setResult('peso inválido', false);
        return;
    }
    if(!altura){
        setResult('Altura inválida', false);
        return;
    }

// Chama a fução getImc para fazer o calculo

    const imc = getImc(peso, altura);

// Seta o result com o IMC encontrado

    setResult(`Seu IMC: ${imc} Resultado: ${getNivelImc(imc)}`, true);
});


// Função responsável por criar os elementos 'P'

function criaP(){
    
// result.innerHTML = `<p>${msg}</p>`;

// Cria um elemento HTML, sem a necessidade de usar o método acima

    const p = document.createElement('p');

// Adiciona uma classe a tag  P criada

    return p;
}

// Função responsável por setar o resultado!
// recebe uma mensagem e um parametro "true or false'"

function setResult(msg, isValid){

    const result = document.querySelector('#result')
    result.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;

// Adiciona o elemento ao HTML, como um elemento filho

    result.appendChild(p);
}

// função responsável por fazer o calculo do imc

function getImc(peso, altura){
    const IMC = peso / (altura * altura);
    return IMC.toFixed(2);
}

// Retorna o nivel referente ao IMC

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >=25) return nivel[2]
    if(imc >=18.5)return nivel[1]
    else return nivel[0]
 
}