/* If e Else */

//let temperature = (Math.random([36.6]) * 50.0).toFixed(1)

let temperature = 37.4
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if ( highTemperature ) {
  console.log('Você está com Febre Alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Está Saudavel')
}

//console.log(temperature)