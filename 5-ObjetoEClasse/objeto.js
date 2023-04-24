const rafa = {
    nome: "Rafaella Monteiro Massa",
    idade: 24,

    descrever: function(){ //método
        console.log('Meu nome é ' + this.nome +  ' e minha idade é ' + this.idade);
    }
};

console.log(rafa.nome);
console.log(rafa.idade);
console.log(rafa);

rafa.altura = 1.53; //incrementando

console.log(rafa);

delete rafa.altura; //removendo

console.log(rafa);

rafa.descrever();