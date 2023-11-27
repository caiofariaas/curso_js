const form = document.querySelector('#formulario')

// Adicionando uma função anonima junto ao addEvent...

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso){
        setResult('peso inválido', false);
        return;
    }
    if(!altura){
        setResult('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);

    console.log(imc);

});


function criaP(className){
    
// result.innerHTML = `<p>${msg}</p>`;

// Cria um elemento HTML, sem a necessidade de usar o método acima

    const p = document.createElement('p');

// Adiciona uma classe a tag  P criada

    p.classList.add(className)

    return p;
}

function setResult(msg, isValid){
    const result = document.querySelector('#result')
    result.innerHTML = '';

    const p = criaP('paragrafoResult');
    p.innerHTML = msg

// Adiciona o elemento ao HTML, como um elemento filho

    result.appendChild(p);
}

function getImc(peso, altura){

    const IMC = peso / (altura * altura);

    return IMC;
}

