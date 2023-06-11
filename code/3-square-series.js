// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  let number = prompt('What number do you want the square series for?')
  let count = 1
  let series = 'Series for ' + number + ' is: '

  while (count <= number) {
    series = series + (count * count)
    series = series + ', '
    count = count + 1
  }

  alert(series)
  
}
