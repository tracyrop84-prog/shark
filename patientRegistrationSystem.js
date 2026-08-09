const nakuruHospital = ["Peter", "Daisy", "Agnes"];
const kenyattaHospital = ["Julie", "Ethan", "Jim"];
const eldoretHospital = ["Boyd", "Victor", "Martin"];

function combinePatients(...args) {
  const combinedObject = {
    patients: [],
    mergeDate: "",
  };
  args.forEach(function (patientlist) {
    combinedObject.patients = [...combinedObject.patients, ...patientlist];
  });
  combinedObject.mergeDate = new Date().toString("M/d/yyyy");
  return combinedObject;
}
let result = combinePatients(nakuruHospital, kenyattaHospital, eldoretHospital);
console.log(result);
