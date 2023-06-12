// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  let max = prompt('What number do you want the Fibonacci Sequence up to?')
  let count = 0
  count = Number(count)
  let sequence = 'The Fibonacci Sequence is: '
  let old = 0
  let prev = 1
  let next = ' '

  while (count < max) {
    next = old + prev
    old = prev
    prev = next
    sequence = sequence + ' ' + next
    count = next
  }


  alert(sequence)

}
