/*Crie um objeto biblioteca com um array de livros
(cada livro é um objeto com titulo, autor e anoPublicacao). 
Escreva uma função que recebe a biblioteca
e imprime só os títulos dos livros publicados depois de 2010. */

let biblioteca = { livros: [
    {titulo:"A Esperança" , autor:"Suzanne Collins"  , anoPublicado: 2010}, 
    {titulo:"Só Garotos" , autor:"Patti Smith"  , anoPublicado: 2010},
    {titulo:"A Dança dos Dragões" , autor:"George R. R. Martin"  , anoPublicado: 2011}] }

    function livrosbiblioteca (biblioteca) {
        for(let livro of biblioteca.livros){
            if (livro.anoPublicado > 2010){
                console.log(livro.titulo)
            }
        }
    }
livrosbiblioteca(biblioteca)