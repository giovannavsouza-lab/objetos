/*Crie um array com 3 objetos representando frutas, cada uma com nome e preco.
 Depois, use um loop para imprimir o nome de cada fruta. */

 let frutas = [
    {nome: "Morango" , preço: 2.99},
     {nome: "Banana" , preço: 4.45},
      {nome: "Abacaxi" , preço: 1.99}
    ]

 for (let fruta of frutas) {
   
    console.log(fruta.nome)
 }