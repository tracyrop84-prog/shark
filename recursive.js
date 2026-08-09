function userNumberInput() {
  for (count = 1; count <= 2; count++) {
    promptUserInput(count);
  }
}
function promptUserInput(count, isAttempted = false) {
  let input = "";
  if (isAttempted) {
    input = prompt(`Enter a valid number ${count}`);
  } else {
    input = prompt(`Enter number ${count}`);
  }
  if (input !== null && input !== "") {
    // Checks if input is a valid number
    if (isNaN(input)) {
      promptUserInput(count, true);
    }
    if (Number(input) > 1) {
      console.log(`Input is greater than 1`);
    } else {
      console.log(`Input is less than 1`);
    }
    console.log(`number ${count}: ${input}`);
  } else {
    promptUserInput(count, true);
  }
}

userNumberInput(); //calling the function


