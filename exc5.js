/*Dado o objeto:
js
const aluno = {
  nome: "Ana",
  nota1: 8,
  nota2: 7,
  nota3: 9
};
Use um for...in para imprimir cada chave e seu respectivo valor. */

const aluno = {
    nome: "Ana",
    nota1: 8,
    nota2: 7,
    nota3: 9
  };

  for(let chave in aluno){
    console.log(`${chave} : ${aluno[chave]}`)
  }
