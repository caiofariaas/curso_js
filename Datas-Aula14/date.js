// Função construtora sempre começa com letra maiuscula

// Literal
// Valores em milesimos de segundos

const tresHoras = 60 * 60 * 3 * 1000;
const umDIa = 60*60 *24 * 1000;

const data = new Date(0 + tresHoras + umDIa);

console.log(data.toString());

// Criar uma Data Padrão

const dataInteira = new Date();

// 20 de abril de 2019, 15:14:27
// Informar os mêses com -1

const dataa = new Date(2019, 3, 20, 15, 14, 2, 500);


// Pegando elementos especificos de Data

console.log("Dia", dataa.getDate());
console.log("Mês", dataa.getMonth() + 1);
console.log("Ano", dataa.getFullYear());
console.log("Hora", dataa.getHours());
console.log("Min", dataa.getMinutes());
console.log("Seg", dataa.getSeconds());
console.log("Ms", dataa.getMilliseconds());
console.log("Dia semana:", dataa.getDay());

// Formatador de Datas
// Existem funções prontas, porem dessa forma você a usa como quiser

function formataData(data){

    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const horas = zeroEsquerda(data.getHours());
    const minutos = zeroEsquerda(data.getMinutes());
    const segundos = zeroEsquerda(data.getSeconds());

    return ` ${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

// Verifica o zero a esquerda!

function zeroEsquerda(num){
// Função que verifica se o número é maior que 10, caso for apenas o retorna
// caso não for, ele retorna o num com o zero a esquerda

    return num >= 10 ? num : `0${num}`
}

// usando o formatador em uma data

const dataBR = formataData(dataa);

console.log(dataBR)


// Retorna literalmente o dia da semana, por exemplo
// quinta-feira, ele retornará 5
// Segunda = 1, etc...

let diaSemanaTexto;
const dia = dataa.getDay();

// Formatando dia para mostrar ao usuario

if(diaSemanaTexto === 0) diaSemanaTexto = "Domingo";
else if(dia === 1) diaSemanaTexto = "Segunda"
else if(dia === 2) diaSemanaTexto = "Terça"
else if(dia === 3) diaSemanaTexto = "Quarta"
else if(dia === 4) diaSemanaTexto = "Quinta"
else if(dia === 5) diaSemanaTexto = "Sexta"
else if(dia === 6) diaSemanaTexto = "Sabado"


console.log(diaSemanaTexto);