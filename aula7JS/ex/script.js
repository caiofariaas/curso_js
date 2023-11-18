const num = Number(prompt("Digite um número"));

// Selecionando um elemento pelo seu ID e adicionando elementos ao HTML

const texto = document.getElementById("texto");

let cardTotal = `
                <h1>Seu número é: ${num}</h1>
                <p>Seu número +2 é ${num + 2}</p>
                <p>Raiz Quadrada = ${Math.sqrt(num)}
                <p>Interio?: ${Number.isInteger(num)}
                <p>É NaN?: ${Number.isNaN(num)}
                <p>Arredondando para baixo: ${Math.floor(num)}
                <p>Arredondando para cima: ${Math.ceil(num)}
                <p>Com duas casas decimais: ${num.toFixed(2)}
                `;

texto.innerHTML = cardTotal;
