require("datejs");

function combineUsers(...args) {
  const combineObject = {
    users: [],
  };
  args.forEach(function (user) {
    combineObject.users = [...combineObject.users, ...user];
  });
  combineObject.merge_date = new Date().toString("M/d/yyyy");
  return combineObject;
}
let result = combineUsers();
console.log(result);
