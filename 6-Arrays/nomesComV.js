/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

const nomes = ['Marisa', 'Lucas', 'Veronica', 'Mauro', 'Victor'];

for (let i = 0; i < nomes.length; i++) {
    const element = nomes[i];

    if(element.startsWith('V')){
        console.log(element);
    }
}