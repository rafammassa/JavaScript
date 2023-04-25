/*
2) Crie um programa que seja capaz de percorrer uma lista de números e 
imprima cada número Par encontrado.
*/

const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if (numero % 2 === 0){
        console.log(numero)
    }
}