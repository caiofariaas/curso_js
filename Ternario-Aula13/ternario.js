const pontos = 999

if(pontos >= 1000){
    console.log("VIP")
}
else{
    console.log("Usuario normal!")
}

// Usando o ternário:
// oque vem após o ? é oque acontece caso a expressão for verdadeira
// os ':' representam o else!

// condição ? valor para True : valor para False

const usuario = pontos >= 1000 ? "Usuario Vip" : "Usuario Normal";

// Opção de 'valor' padrão, aqui ele verifica se corUser tem um valor, 
// caso tenha ele ira atribuir ao corPadrão, caso não tenha ele se apropria da segunda opção

const corUser = null;
const corPadrão = corUser || "Preta"

console.log(corPadrão)