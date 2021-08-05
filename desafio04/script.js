/*
  //Buscando e contando dados em Arrays 
  
  Baseado no Array de Livros por categoria abaixo, faça os seguintes
  desafios.

    * Contar o numero de categorias e o numero de livro em cada categoria
    * Contar o numero de Autores
    * Mostrar o livro do Autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do
    autor e devolver os livros desse autor.

*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
          title:"Os segredos da Mente Milionaria", 
          author:"T. Harv Eker",
      },
      {
          title:"O Homem mais rico da Babilonia", 
          author:"George S. Clason",
      },
      {
          title:"Pai rico, pai pobre", 
          author:"Robert T. Kiyosaki e Sharon L. Lecther",
      }
    ],
  },

  {
    category: "inteligencia Emocional",
    books: [ 
      {
          title:"Você é Insubistituivel", 
          author:"Augusto Curry",
      },
      {
          title:"Ansiedade - Como enfrentar o mal do sêculo", 
          author:"Augusto Curry",
      },
      {
          title:"Os 7 habitos das pessoas altamente eficazes ", 
          author:"Stephen R. Covey",
      }
    ],
  },
];

const totalCategories = booksByCategory.length
console.log(totalCategories)

for (let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategory) {
    for(let books of category.books){
      if(authors.indexOf(book.author) == -1) {
          authors.push(book.author)
      }
    }
  }

  console.log("Total de autores: ", authors.length)
}

countAuthors()

function booksOFAuthor(author) {
  let books = [];

  for(let category of booksByCategory) {
    for(let books of category.books){
      if(book.author === author) {
        book.push(book.title)
      }
    }
  }

  console.log(`Livros do Autor ${author}:  ${books.join(", ")}`)
}

booksOFAuthor()