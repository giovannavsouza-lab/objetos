/*Usando o objeto produto do exercício anterior:
Adicione uma nova propriedade marca.
Altere o valor de estoque para 8. */

const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10,
    marca: "Lenovo"
}

produto.estoque -= 2 // Ou pode colocar só o oito, em vez de "fazer conta" 

console.log("Há", produto.estoque , "computadores em estoque.")