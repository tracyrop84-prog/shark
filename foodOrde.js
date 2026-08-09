// Callback function
function displayReservationDetails(customerData) {
  alert(
    `${customerData.firstName} ${customerData.lastName} has successfully made a reservation!\n
Party Size: ${customerData.partySize}
Reservation Date: ${customerData.reservationDate}
Reservation Time: ${customerData.reservationTime}`,
  );
}

// Main function
function makeReservation(callback) {
  alert("Welcome to Flatiron Diner's dinner reservation page!");

  const customerData = {};

  customerData.firstName = prompt("What is your first name?");
  customerData.lastName = prompt("What is your last name?");
  customerData.partySize = prompt("How many people will be in your party?");
  customerData.reservationDate = prompt(
    "Which date would you like to reserve for?",
  );
  customerData.reservationTime = prompt(
    "Which time would you like to reserve for?",
  );

  // Call the callback function
  callback(customerData);
}

// Call the main function and pass the callback
makeReservation(displayReservationDetails);
