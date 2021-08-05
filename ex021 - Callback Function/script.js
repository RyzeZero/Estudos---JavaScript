// Callback Function
function sayMyName (name) {
    console.log('Antes de executar a função callback')

    name()
    /* name() {
        console.log('Estou em uma Callback')
    }*/

    console.log('Depois de executar a função callback')
}

sayMyName(
    () => {
        console.log('Estou em uma Callback')
    }
)