/*Faça um programa para calcular o valor gasto de combustível em uma viagem.
Você terá 3 variáveis:
- preço do combustível;
- valor médio de gasto do carro KM/L;
- distância em KM.
Imprima no console o valor gasto de combustível.
*/
const precoCombustivel = 5.79;
const consumoMedio = 10;
const distância = 100;

const total = precoCombustivel * (distância / consumoMedio);

console.log('O valor gasto é de R$' + total.toFixed(2));