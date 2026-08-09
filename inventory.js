const products=[];
const product1={
    name:"table",
    price:20000,
    stock:200,
}
const product2={
    name:"headphones",
    price:150,
    stock:24
}
products.push(product1,product2);

function addProduct(name,price,stock){
    const newProduct={
    name:name,
    price:price,
    stock:stock
}
products.push(newProduct)
}
addProduct("mouse",3000,87)
console.log(products)

const menuItem=[]
const breakFast={
    name:"tea",
    price:50,
    temp:"hot"
}
const lunch={
    name:"spagetti meat balls",
    price:450,
    temp:"warm"
}
menuItem.push(breakFast,lunch)
console.log(menuItem)

function addMenu(name,price,temp){
    debugger
    const newMenu={
        name:name,
        price:price,
        temp:temp,
    }
    menuItem.push(newMenu);
}
addMenu("rice chicken",499,"warm");


