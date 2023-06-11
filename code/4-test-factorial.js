// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let number = prompt('What number do you want the factorial for?')
  let count = number
  let total = 1

  while (count > 1) {
    total = total * count
    count = count - 1
  }

  alert('The factorial of ' + number + ' is ' + total)
}
