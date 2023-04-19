/*Faça um algoritmo que dada as 3 notas de um aluno, calcule e imprima sua média
e classificação seguindo a tabela abaixo:
Menor que 5: reprovado;
Entre 5 e 7: recuperação;
Acima de 7: aprovado.
*/

const nota1 = 6;
const nota2 = 6;
const nota3 = 5;

const media = (nota1 + nota2 + nota3)/3;
console.log('MÉDIA: ' + media.toFixed(2));

if (media<5){
    console.log('Reprovado');
} else if (media>=5 && media<=7){
    console.log('Recuperação');
}else {
    console.log('Aprovado');
}