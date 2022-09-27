// Usando o ... com operador spread(Espalhar)

// Copiamos o conteúdo de um array que o bandas para dentro de outro
// Na prática, copiamos o conteúdo de um array (bandas) para dentro de outro (maisBandas)

// IMUTABILIDADE (não muda)

const bandas = ['Rush', 'Drean Theater', 'Slayer', 'Black Sabbath'];
const maisBandas = [...bandas, 'Van Halen', 'Deep Purple'];

console.log(maisBandas);


console.log('==================================');

// Spread com objeto
const dados = {
    nome: 'Palloma',
    idade: 21
}

const novoObjeto = {
    ...dados,
    cidade: 'São Paulo',
    estado: 'SP',
    idade: 25 //Sobreescrevendo o valor somente da propriedade idade
} 

console.log(novoObjeto);
console.log('Idade atualizada ' + novoObjeto.idade);
console.log(dados);