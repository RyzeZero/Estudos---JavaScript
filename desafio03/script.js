// ## Celcius em fahrenheit
/*Crie uma função que receba uma string em  Celcius ou fahrenheit e
  faça a transformação de uma unidade para outra.
*/
/*
   C = (F - 32) * 5/9
   F = C * 9/5 + 32
*/

function transformThis(degree) {
   const celsiusExists = degree.toUpperCase().inlcudes('C')
   const fahrenheitExists = degree.toUpperCase().inlcudes('F')

   //Fluxo de ERROR
   if (!celsiusExists && !fahrenheitExists) {
      throw new Erro('Degree not defined')
   }
   
   //Fluxo ideal, F -> C
   let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
   let formula = fahrenheit => (fahrenheit - 32) * 5/9
   let degreeSign = 'C'

   //Fluxo Alternativo, C -> F
   if(celsiusExists) {
     updatedDegree = Number(degree.toUpperCase().replace("C", ""))
     formula = celsius => celsius * 9/5 + 32
     degreeSign = 'F'
   }

   return formula(updatedDegree) + degreeSign
}

try {
  console.log(transformThis('10C'))
  console.log(transformThis('50F'))
  transformThis('50Z')
} catch (error) {
  console.log(error.message)
}