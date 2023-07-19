// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  let number = prompt("What number do you want the factorial for?")
  //asks the user what number they want the factorial for
  let count = number
  let total = 1

  while (count > 1) {
    total = total * count
    count = count - 1
  }
  //this loop calculates the factorial of the user's number

  alert("The factorial of " + number + " is " + total)
  //outputs the factorial for the user to see
}
