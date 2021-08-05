// Manipulando arrays

let techs = ["html", "css", "js"]


//   - Adicionar um item no fim
techs.push("nodejs")

//   - Adicionar no começo
techs.unshift("SQL")

//   - Remover do fim
//techs.pop()

//   - Remover do começo
//techs.shift()

//   - Pegar somente alguns elementos do Array 
//console.log(techs.slice(1, 3))

//   - Remover 1 ou masi items em qualquer posição do Array
//techs.splice(1, 1)

//   - Encontrar a posição de um elemento no array 
let position = techs.indexOf('css')
techs.splice(position, 2)
console.log(techs)