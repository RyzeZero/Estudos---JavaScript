// Function Hoisting
 sayMyName () ;

 function sayMyName () {
     console.log('Adam')
     return sayMyName
 }