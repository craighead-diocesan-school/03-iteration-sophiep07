// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  let count = 0

  while (count < 10) {
    alert(count + '...')
    count = count + 3
  }
  
  let leftOver = count - 11
  
  alert('Done, with ' + leftOver + ' left over.')
}