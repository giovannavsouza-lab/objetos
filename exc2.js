/*Dado o objeto abaixo, 
acesse o valor de preco de duas formas diferentes
(notação de ponto e notação de colchetes):
js
const produto = {
nome: "Notebook",
preco: 3500,
estoque: 10
};*/

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10
}
console.log(produto.preco)
console.log(produto['preco'])
//O primeiro procura a variavel dentro do objeto;
//Segundo não procura porque ja sabe que é uma variavel logo só coloca a informacão armazenada no código