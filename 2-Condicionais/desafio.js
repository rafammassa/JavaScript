/*Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis:
- Preço do etanol;
- Preço da gasolina;
- Tipo de combustível no carro;
- Gasto médio do carro por KM;
- Distância em KM da viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distancia = 100;
let tipoCombustivel = 'Gasolina';

const litrosConsumidos = distancia / kmPorLitro;

if (tipoCombustivel === 'Etanol'){
    const total = litrosConsumidos * precoEtanol;
    console.log(total.toFixed(2));
} else {
    const total = litrosConsumidos * precoGasolina;   
    console.log(total.toFixed(2)) 
}