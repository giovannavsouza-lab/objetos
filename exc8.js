/*Remova a propriedade estoque do objeto produto usando delete */

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10,
    marca: "Lenovo"
}

console.log(produto)
delete produto.estoque
console.log(produto)
