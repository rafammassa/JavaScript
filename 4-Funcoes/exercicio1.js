function escrevaMeuNome (nome){
    return 'Meu nome é '+ nome;
}

function verificarIdade(idade){
    if(idade>=18){
        console.log(escrevaMeuNome('Rafaella. ') + 'Maior de idade.')
    } else {
        console.log(escrevaMeuNome('Rafaella. ') + 'Menor de idade.')
    }
}

verificarIdade(18);