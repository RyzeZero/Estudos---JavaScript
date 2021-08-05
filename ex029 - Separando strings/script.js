// Manipulando Strings e Arrays
/*
    -Separre um texto que contem expaços, em um novo array
    onde cada texto é uma posição do array, Depois disso
    ,Transforme  o array em um texto e onde era espaço coloque
    __ 
*/

let phrase = 'Programar é bem divertido!!!'
let myArray = phrase.split(" ")

let phraseWhithUnderscore = myArray.join("_")
console.log(phraseWhithUnderscore.toUpperCase())