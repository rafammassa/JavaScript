const numero = 11;
const numeroPar = (numero % 2) === 0; //"se o resto da divisão por 2 for igual a 0"

console.log('Esse número é par? ' + numeroPar);

//utilizando estrutura if

if (numeroPar) {
    console.log("NÚMERO PAR!")
} else { 
    console.log("NÚMERO ÍMPAR!")  
}

if (!numeroPar) { //negando com a exclamação
    console.log("NÚMERO ÍMPAR! (teste)")
}

const numero1 = 0;
const divisivelPor5 = (numero1 % 5) === 0;

console.log("Esse número é divisível por 5?");

if (numero1 === 0) {
    console.log("Número inválido")
} else if (divisivelPor5){
    console.log("Sim.")
} else {
    console.log("Não.")
}
