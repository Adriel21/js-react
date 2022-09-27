

class Pessoa {
    // Propriedades
    nome = 'sem nome';
    genero = 'não informado';
    idade;

    // Métodos
    mostraGenero() {
        console.log( this.genero );
    }

    mostraNome(){
        console.log( this.nome );
    }

    mostraIdade(){
        console.log( this.idade )

        if(this.idade < 18) {
            console.log("==============");
            console.log('Você é menor de idade');
        
        } else {
            console.log("==============");
            console.log('Você é maior de idade');
        }
    }
}

class Aluno extends Pessoa{
    // Aqui não utilizamos var, const ou let porque são propriedades/atributos da classe
    matricula;
    curso;

    // Métodos
    mostraDados(){
         console.log(this.matricula);
         console.log(this.curso);

        //  Métodos da super classe
        this.mostraNome();
        this.mostraGenero();
        this.mostraIdade();
    }
}

/* Criando objetos/instâncias */
let umaPessoa = new Pessoa;
umaPessoa.nome = 'Tiago';
umaPessoa.genero = 'masculino';
umaPessoa.idade = 35;

// console.log(umaPessoa);

let outraPessoa = new Pessoa;
outraPessoa.nome = "Mônica";

// console.log(outraPessoa);

// objeto herdando recursos
let aluno = new Aluno;
aluno.nome = 'Palloma';
aluno.genero = 'Feminino';
aluno.matricula = '123abc';
aluno.curso = 'Js para React'
aluno.idade = 21;
// console.log(aluno);
aluno.mostraDados();






