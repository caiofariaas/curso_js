// const data = new Date;

// console.log(data);

// function criarP(){
//   const p = document.createElement('p');
//   return p;
// }

// function setText(date){
//   const resultado = document.querySelector('.container');

//   resultado.innerHTML = '';
//   const p = criarP();

//   p.innerHTML = date;

//   resultado.appendChild(p);
// }


// function diaText(){

//   const day = data.getDay();

//   let txt = ''

//   switch(day){
//     case 0: txt = "Domingo"; return txt;
//     case 1: txt = "Segunda-Feira"; return txt;
//     case 2: txt = "Terça-Feira"; return txt;
//     case 3: txt = "Quarta-Feira"; return txt;
//     case 4: txt = "Quinta-Feira"; return txt;
//     case 5: txt = "Sexta-Feira"; return txt;
//     case 6: txt = "Sábado"; return txt;
//   }
// }

// function mesText(){

//   const mes = data.getMonth();

//   let txt = ''

//   switch(mes){
//     case 0: txt = "Janeiro"; return txt;
//     case 1: txt = "Fevereiro"; return txt;
//     case 2: txt = "Abril"; return txt;
//     case 3: txt = "Março"; return txt;
//     case 4: txt = "Maio"; return txt;
//     case 5: txt = "Junho"; return txt;
//     case 6: txt = "Julho"; return txt;
//     case 7: txt = "Agosto"; return txt;
//     case 8: txt = "Setembro"; return txt;
//     case 9: txt = "Outubro"; return txt;
//     case 10: txt = "Novembro"; return txt;
//     case 11: txt = "Dezembro"; return txt;
//   }
// }

// function dataTotal(day, mes){
//   day = diaText();
//   mes = mesText();
//   const diaNum = data.getDate();
//   const ano = data.getFullYear();
//   const horas = data.getHours();
//   const minutos = data.getMinutes();

//   return `${day}, ${diaNum} de ${mes} de ${ano} ${horas}:${minutos}`
// }

// setText(dataTotal(diaText(), mesText()));



// !!!!! Segundo método !!!!!

// const result = document.querySelector('.container h1');

// const data = new Date();

// result.innerHTML = data.toLocaleString('pt-BR',{dateStyle: 'full', timeStyle: 'short'} );



// !!!!! Terceiro método !!!!!

const data = new Date;

console.log(data);

function criarP(){
  const p = document.createElement('p');
  return p;
}

function setText(date){
  const resultado = document.querySelector('.container');

  resultado.innerHTML = '';
  const p = criarP();

  p.innerHTML = date;

  resultado.appendChild(p);
}

// Substituindo o switch case por uma lista com índices

function diaText(){

  const day = Number(data.getDay());

  const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
  
  return dias[day];
}

function mesText(){

  const mes = Number(data.getMonth());

  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 
                  'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
                   'Outubro', 'Novembro', 'Dezembro'];
  return meses[mes];
}

function dataTotal(day, mes){
  day = diaText();
  mes = mesText();
  const diaNum = data.getDate();
  const ano = data.getFullYear();
  const horas = data.getHours();
  const minutos = data.getMinutes();

  return `${day}, ${diaNum} de ${mes} de ${ano} ${horas}:${minutos}`
}

setText(dataTotal(diaText(), mesText()));
