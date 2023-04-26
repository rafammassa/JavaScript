const { gets, print } = require('./funcoes-auxiliares');

/*Uma sala tem 5 alunos e para cada um foi sorteado um número de 1-100.
Faça um programa que mostre os 5 números sorteados e o maior deles.
Dados de entrada: 5, 50, 10, 98, 23
Dados de saída: 98
*/

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado)
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(numerosSorteados)
print(maiorValor)
