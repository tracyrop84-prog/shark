function calculateArea(length,width){

    let area=length*width;
    return area;
} debugger;
let area=calculateArea(5,10);
console.log(`area of rectangle,${area}`)

const customerNames=["alice","tracy","brown"];
customerNames.push("diana");
console.log(customerNames);
customerNames[1]="robert"
console.log(customerNames)
console.log(customerNames[0])
customerNames.pop()
console.log(customerNames)

const students=[];
students.push("mary","john","tom","peter","rose")
console.log(students)
console.log(students[1])
students[3]="ginny bob"
console.log(students[3])
console.log(students)
students.pop()
console.log(students)

const employees=[]
employees.push("boyd","sara","julie","jim","smiley", "victor")
console.log(employees[0])
employees[0]="ellis"
console.log(employees[0])
employees.splice(1,1)
console.log(employees)

const apple={
    type:"red delicious",
    color:"red",
    taste:"sweet"
};
apple.size="medium";
console.log(apple)
console.log(apple.color)
apple.color="green"
console.log(apple)
delete apple.taste;
console.log(apple)

let menuItem={};
menuItem.namd="margherita pizza";
menuItem.price=12.99;
menuItem.isavailable=true;
console.log(menuItem)
menuItem.price=17.9;
console.log(menuItem)
