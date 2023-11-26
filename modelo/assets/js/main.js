const form = document.querySelector('#formulario')

// Adicionando uma função anonima junto ao addEvent...

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("asas")
    setResult("olá mundo")
});

function setResult(msg){
    const result = document.querySelector('#result')
    result.innerHTML = '';

    // result.innerHTML = `<p>${msg}</p>`;

// Cria um elemento HTML, sem a necessidade de usar o método acima

    const p = document.createElement('p');

// Adiciona uma classe a tag  P criada

    p.classList.add('paragrafoResult')
    p.innerHTML = msg;

// Adiciona o elemento ao HTML, como um elemento filho

    result.appendChild(p);
}

