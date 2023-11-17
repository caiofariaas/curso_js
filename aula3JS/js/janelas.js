// Alert
// Alert mostra uma mensagem na tela do usuário
// Alert sempre retorna undefined!

let text = "Mensagem";
alert(text);

// Confirm
// Confirm fornece a opção de Sim ou Não
// Retorna um valor True ou False.
// é possivel armazenar este valor a uma variavel

let confirmacao = confirm("Deseja confirmar?");

console.log(confirmacao);

// Prompt
// Prompt é um alert porem com entrada de dados (input)!
// é possivel armazenar os dados em uma variavel
// Sempre armazena como String, portanto, é necessario usar o ParseInt ou Float

let nome = prompt("Digite seu nome");

let idade = parseInt(prompt("Digite sua idade"));

console.log(`Seu nome é ${nome}\nSua idade é ${idade}\nSua idade a 2 anos atrás era ${idade - 2}`);
