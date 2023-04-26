/*
5) Dado uma lista com as médias tiradas pelos alunos.
Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]
*/

const notas = [2, 7, 3, 8, 10, 4];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;

if(media < 5){
    console.log(media);
}