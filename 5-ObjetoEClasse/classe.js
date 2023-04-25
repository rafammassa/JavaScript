class Pessoa{
    nome;
    idade;

    constructor (nome, idade){ //construtor será chamado sempre que uma pessoa for instanciada
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever(){
        console.log('Meu nome é ' + this.nome +  ' e minha idade é ' + this.idade);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(p1.nome + ' é mais velho(a) que ' + p2.nome);
    } else if (p2.idade > p1.idade){
        console.log(p2.nome + ' é mais velho(a) que ' + p1.nome);
    } else {
        console.log(p1.nome + ' tem a mesma idade que ' + p2.nome);
    }
}

const rafaella = new Pessoa('Rafaella Monteiro Massa', 24);
const maria = new Pessoa('Maria da Silva', 20);

console.log(rafaella);
rafaella.descrever();

console.log(maria);
maria.descrever();

compararPessoas(rafaella, maria);