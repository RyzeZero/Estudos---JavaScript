//Sistema de Gasto Familiar
//Crie um objeto que possuira 2 propriedades, ambas do tipo Array.

//receitas: []
//despesas: []
/*
  Crie uma função que irá calcular o total de receitas
  e despesas e irá mostra uma mensagem se a Familia está
  com o saldo positivo ou negativo, seguido do valor do Saldo.
*/

let family = {
  incomes: [2000, 130.00, 200, 140,],
  expenses: [3000, 370.00, 45.00, 300]
}

function sum(array) {
  let total = 0;

  for (let value of array) {
    total += value
  }

  return 
}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = " Negativo "
  
  if(itsOk) {
    balanceText = " Positivo "
  }

  console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculateBalance()

