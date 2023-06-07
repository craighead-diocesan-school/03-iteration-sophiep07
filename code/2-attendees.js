// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {

  let count = 0
  let numOfAttendees = prompt('How many attendees are there?')
  let attendeeList = ''
  
  while (count < numOfAttendees) {
    let attendee = prompt('What is the name of the attendee?')
    attendeeList = attendeeList + attendee + ', ' 
    count = count + 1
  }
  
  alert(attendeeList) 
}

function make2() {

  let count = 0
  let numOfnumbers = prompt('How many numebers do you want to add?')
  let sum = ''
  
  while (count < numOfnumbers) {
    let number = prompt('What is one of the numbers?')
    sum = sum + number + ', ' 
    count = count + 1
  }
  
  alert(sum)
}