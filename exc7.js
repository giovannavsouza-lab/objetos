/*Dado o objeto produto (exercício 3), 
verifique se ele tem a propriedade garantia usando o operador 
in ou o método hasOwnProperty. */

const produto = {
    nome: "mp3",
    preco: 2500,
    estoque: 2,
}
console.log("Garantia" in produto)
console.log("nome" in produto)
//Dá pra usar tambem
console.log(produto.hasOwnProperty("garantia"))

