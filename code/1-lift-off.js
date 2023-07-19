// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10

  while (count > 0) {
    alert(count + "...")
    count = count - 1
    //the loop will countdown from ten then output : 'lift off'
  }

  alert("Lift Off!")
}

function make1() {
  let count = 0

  while (count < 10) {
    alert(count + "...")
    count = count + 3
    //this will count up in increments of 3 and until it is 10 then tell the user how much is left over
  }

  let leftOver = count - 11

  alert("Done, with " + leftOver + " left over.")
}
