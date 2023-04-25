const alunos = ['Pedro', 'Paulo', 'Fernando'];

console.log(alunos[0]);

alunos.push('Renan'); //adicionando um elemento por ordem de inserção

console.log(alunos);

alunos[5] = 'Vinicius'; //adcionando na posição desejada

console.log(alunos);

const professores = []; //lista pode começar vazia

professores.push('Marco', 'Aurelio', 'Cleber');

console.log(professores);

console.log(professores.pop()); //pega o último item

console.log(professores);

console.log(professores.shift()); //pega o primeiro item

console.log(professores);


const notas = [1, 8, 9, 7];

let soma = 0;
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}
const media = soma / notas.length;
console.log(media);