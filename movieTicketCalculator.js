/*
Scenario: Movie Ticket Price Calculator 🎬

A cinema charges different ticket prices depending on the customer's age.

Write a function called calculateTicketPrice that accepts 2 parameters:

age
isWeekend (a boolean: true or false)
Rules
If the customer is under 5 years old:
Return "Free Ticket"
If the customer is between 5 and 17 years old:
Weekday ticket: KES 300
Weekend ticket: KES 400
If the customer is 18 years or older:
Weekday ticket: KES 600
Weekend ticket: KES 800
*/

function calculateTicketPrice(age, isWeekend) {
  console.log("Executing function...");
  if (age < 5) {
    return "Free Ticket";
  } else {
    if (age >= 5 && age <= 17) {
      if (isWeekend === true) {
        return "Weekend ticket: KES 400";
      } else {
        return "Weekday ticket: KES 300";
      }
    } else {
      if (isWeekend === true) {
        return "Weekend ticket: KES 800";
      } else {
        return "Weekday ticket: KES 600";
      }
    }
  }
}
console.log(calculateTicketPrice(20, false));

/*
Write a function called calculateElectricityBill that accepts 2 parameters:

unitsUsed
costPerUnit
Rules

If unitsUsed is 0 or less, return:

Invalid number of units.

Calculate the bill:

bill = unitsUsed * costPerUnit
If the bill is more than KES 5000, give the customer a 10% discount.
Return the final amount.
*/

function calculateElectricityBill(unitsUsed, costPerUnit) {
  if (unitsUsed <= 0) {
    return `Invalid number of units.`;
  } else {
    let bill = unitsUsed * costPerUnit;
    if (bill > 5000) {
      let discount = 0.1;
      let finalAmount = bill-(bill * discount);
      return finalAmount;
    } else {
      return bill;
    }
  }
}
console.log(calculateElectricityBill(10, 1000));
