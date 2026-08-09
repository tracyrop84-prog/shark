require("datejs");
const computerScience = [
  {
    date: "2026-07-01T09:00:00",
    subject: "ICT",
  },
  { date: "2026-07-01T14:00:00", subject: "Programming" },
  { date: "2026-07-02T09:00:00", subject: "Algorithm" },
];
const business = [
  { date: "2026-07-01T09:00:00", subject: "Business administration" },
  { date: "2026-07-01T13:00:00", subject: "Communication Skills" },
  { date: "2026-07-02T09:00:00", subject: "Intro Business" },
];
function mergeSchedules(schedules1, schedules2) {
  const mergedArray = [...schedules1, ...schedules2];
  return mergedArray;
}
const masterSchedules = mergeSchedules(computerScience, business);
console.log(masterSchedules);

function displaySchedules(schedule) {
  schedule.forEach(function (item) {
    console.log(item.subject);
    console.log(Date.parse(item.date).toString("hh:mmtt MMMM dS, yyyy"));
  });
}
displaySchedules(masterSchedules);
//array.forEach(function(item,index){code to execute})
