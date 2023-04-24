class Pessoa{
    nome;
    idade;

    descrever(){
        console.log('Meu nome é ' + this.nome +  ' e minha idade é ' + this.idade);
    }
}

const rafaella = new Pessoa();

console.log(rafaella)