// Utilizando if/else

const data = new Date();

// Retorna literalmente o dia da semana, por exemplo
// quinta-feira, ele retornará 5
// Segunda = 1, etc...

const dia = data.getDay();

// Formatando dia para mostrar ao usuario

if(dia === 0) diaSemanaTexto = "Domingo";
else if(dia === 1) diaSemanaTexto = "Segunda"
else if(dia === 2) diaSemanaTexto = "Terça"
else if(dia === 3) diaSemanaTexto = "Quarta"
else if(dia === 4) diaSemanaTexto = "Quinta"
else if(dia === 5) diaSemanaTexto = "Sexta"
else if(dia === 6) diaSemanaTexto = "Sabado"


console.log(diaSemanaTexto);

// Switch-Case
// !!! é necessário sempre colocar um break após a expressão !!!
// Ou use o Return

function getDiaSemanaTexto(dia){
    let diaSemanaTexto;

    switch(dia){
        case 0: diaSemanaTexto = 'Domingo'; return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda'; return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça'; return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta'; return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta'; return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta'; return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sabado'; return diaSemanaTexto;
        default: diaSemanaTexto = '!!!! Invalid !!!!'
    }
}

// Uso da função

const diaSemana = getDiaSemanaTexto(dia);
console.log(diaSemana);
