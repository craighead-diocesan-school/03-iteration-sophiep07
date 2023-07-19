// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  let count = 0
  let numOfAttendees = prompt("How many attendees are there?")
  let attendeeList = ""

  while (count < numOfAttendees) {
    let attendee = prompt("What is the name of the attendee?")
    attendeeList = attendeeList + attendee + ", "
    count = count + 1

    alert(attendeeList)
  }
  // asks the user how many atendees there are and their names, then lists them out to the user
}

function make2() {
  let numOfNumbers = prompt("How many numbers do you want to add?")
  let count = 0
  let total = 0
  while (count < numOfNumbers) {
    let numbers = prompt("What are one of the numbers?")
    numbers = Number(numbers)
    total = total + numbers
    //adds the numbers that the user inputed
    count = count + 1
  }
  alert("The sum of those numbers is: " + total)
  //asks the user how many numbers they want to add, then tells them to input them one at a time
  //outputs the sum of the numers
}
