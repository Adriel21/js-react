// 08-destruturacao.js

// Desestruturacao (Destructuring)

// Extrair dadis facilmente de um array ou objeto e armazena-las em variáveis/constantes

// Usamos desestruturação de arrays
const [a, b] = ['Lucas', 'Matheus'];

console.log(a);
console.log(b);

console.log('=================================');

const alunos = ['Adriel', 'Palloma', 'Antonio'];
const [adriel, palloma, antonio] = alunos;
console.log(adriel);
console.log(palloma);
console.log(antonio);

console.log('=================================');

const unidades = ['Penha', 'Tatuapé', 'Itaquera', 'São Miguel Paulista'];
const [penha, tatuape, ,smp] = unidades; // Pulando Itaquera
console.log(penha);
console.log(tatuape);
console.log(smp);

console.log('=================================');
// Usamos desestruturação de objetos
const {nome, cidade} = {nome: 'Fulano', idade: 18, cidade: 'São Paulo'};
console.log(nome);
console.log(cidade);



const dados = {
    nome: 'Raul Seixas',
    curso: 'JavaScript',
    nascimento: '06/07/2001'
};

console.log('=================================');

// Definindo um alias(apelido) para nome
const{nome: aluno, curso} = dados;
console.log(aluno);
console.log(curso);


// map
// filter
// reduce

// recursos assincronos (ajax)

