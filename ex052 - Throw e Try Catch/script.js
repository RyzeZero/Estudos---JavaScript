/* Throw */ 
function sayMyName( name = '') {
  if (name === '') {
    //throw new Error("Nome é necessario")
    throw 'Nome é Obrigatorio'
  }

  console.log(name)
}


/* Try/Catch */

try {
  sayMyName('Adam')
} catch(e) {
  console.log(e)
}

console.log('Apos ao try/catch')
/*
  Try/Catch serve para a capitura e mostrar erros na aplicação
  caso eu Use apenas o throw na aplicação, ele ira para tudo
  dai usamos o try{} catch{} para não deixar toda a aplicação parar.
 */