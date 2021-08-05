// For... in  
let person = {
  name: 'Rick',
  age: 35,
  weight: 80.5
} 

for(let property in person) {
  console.log(property)
  console.log(person[property])
}