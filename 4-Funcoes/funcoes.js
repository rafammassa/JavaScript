function quadrado (numero){
    return (numero * numero);
}

function incrementarJuros (valor, percentualJuros){
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo
}

function main () {
    quadrado (10); //chamando a função para verificar o quadrado de 10
    const quadradodeDez = quadrado(10);
    console.log(quadradodeDez);

    console.log(incrementarJuros (100, 10)); //chamando a funcção para incrementar 10% de juros em um valor de 100
    console.log(incrementarJuros (100, 15));
    console.log(incrementarJuros (100, 20));
}