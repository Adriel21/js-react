// 07-operador.rest.js

// Usando o ... como operador rest ()
// Na prática, usamos para mesclar uma lista de argumentos/parâmetros oara 

function ordenar(...parametros){ //Servindo como REST - Ordenando
    return parametros.sort();
}

console.log('====================================================');

// Utilizando arrow function
const ordenarDois = (...parametros) => parametros.sort(); 

console.log(ordenar('Lucas', 'Antonio', 'Adriel'));
console.log(ordenar('Rush', 'Pink Floyd', 'Nirvana', 'Slayer', 'Gun`s Roses'));

console.log('====================================================');

let jogos = ['God of War', 'Assassins Creed', 'Naruto', 'DBZ', 'Resident Evil 4'];

console.log(ordenar(...jogos)); //Servindo como Spread - espalhando

console.log(ordenarDois('Palloma', 'Gabriel', 'Rodrigo'));
console.log('====================================================');

function soma(...valores){
    let total = 0;

    for(let valor of valores) {
        total += valor
    }
    return total;
}
;
console.log(soma(10, 40))

console.log('====================================================');
// Utilizando arrow function
const somaDois = (...valores) => { 
    let total = 0;

    for(let valor of valores) {
        total += valor
    }
    return total;
};

console.log(somaDois(10, 30));


