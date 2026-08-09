require("datejs");

weatherReports = [
  {
    city: "Nairobi",
    temperature: 18,
    date: "2026-07-09T06:30:00",
  },
  {
    city: "Eldamaravine",
    temperature: 21,
    date: "2026-07-09T06:34:00",
  },
  {
    city: "Eldoret",
    temperature: 20,
    date: "2026-07-09T06:36:00",
  },
  {
    city: "Nakuru",
    temperature: 17,
    date: "2026-07-09T06:40:00",
  },
];

function displayWeatherReports(...weatherReports) {
  weatherReports.forEach(function (item) {
    console.log(`City: ${item.city}`);
    console.log(`Temperature: ${item.temperature}`);
    console.log(
      `Date: ${Date.parse(item.date).toString("hh:mmtt MMMM dS, yyyy")}`,
    );
    console.log(`..................................`);
  });
}
displayWeatherReports(...weatherReports);

function test(...numbers) {
  console.log(numbers);
}
test(1, 2, 3);
