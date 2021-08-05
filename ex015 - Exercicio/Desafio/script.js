
//1. Declare uma variavel nome weight
//const weight

//2. Que tipo de dado e variavel acima??
// res: undefined

//console.log(typeof weight)

/* 2. Declare uma variavel e atribua valores para cada um dos dados:
    - name : String
    - Age: Number (Integer)
    - Weight:Number (Float)
    - isSubscribed : boolean
*/
    /*name = "José" 
    age =33
    Stars = 13.7
    isSubscribed = true*/

/*
    4. A variavel student abaixo e de que tipo de dados?
    res: Object
    
    4.1 Atribua a ela as mesma propriedades do exercicio 3

    4.2 Mostre no consolo a seguinte mensagem :
    <name> de idade <age> pesa weight kg.


*/

let student = {
    name : "José", 
    age : 33,
    weight: 83.5,
    isSubscribed : true
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variavel do tipo Array, de nome students e atribua a ela
//      nenhum valor, ou seja, somente Array vazia.

let students = []

/*
    6. Reatribuir para a variavel acima ja criada
*/

students = [
    student
]

// 7. Coloque no console o valor da posição zero do Array acima.
console.log(students)

//8. Crie um novo student e coloque na posição 1 do Array students.
const jose = {
    name: 'Jose',
    age: 30,
    weight: 83.6,
    isSubscribed: true
}

students = [
    student,
    jose
]

console.log(students)

//9.

console.log(a)
var a = 1

//res: undefined - ele vai retornar a variavel para cima do console.log e deixar
// ela vazia e vai aparecer undefined(Não Definida), pois o console veio antes
// e não depois da declaração dessa variavel. 