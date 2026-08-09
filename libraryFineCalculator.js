function calculateFine(daysLate, finePerDay) {
  console.log("Executing function......");

  if (daysLate <= 0) {
    return `no fine`;
  } else {
    let totalFine = daysLate * finePerDay;
    return `Total fine: KES ${totalFine}`;
  }
}

const result = calculateFine(9, 20);
console.log(result);
