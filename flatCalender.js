require("datejs");
const calendarA = [
  { date: "2024-06-15T12:00:00", event: "Wedding" },
  { date: "2024-07-03T19:00:00", event: "Dinner Reservations" },
  { date: "2024-07-20T08:00:00", event: "Doctors Appointment" },
];

const calendarB = [
  { date: "2024-05-15T09:00:00", event: "Interview" },
  { date: "2024-06-22T20:00:00", event: "Concert" },
  { date: "2024-07-01T14:00:00", event: "Coffee Date" },
];

function mergeCalendars(c1, c2) {
  return [...c1, ...c2];
}
const newCalendar = mergeCalendars(calendarA, calendarB);
console.log(newCalendar);
function readCalendarDates(calendar) {
  calendar.forEach((item) => {
    console.log(Date.parse(item.date).toString("hh:mmtt MMMM dS, yyyy"));
  });
}
readCalendarDates(newCalendar);
