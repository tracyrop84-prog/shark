const products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function addProduct(productName) {
    products.push(productName);
}
addProduct("charger")
console.log(products)

function updateProductName(position, newName) {
    products[position] = newName;
}
updateProductName(1,"Smartphone")
console.log(products)

function removeLastProduct() {
    products.pop();
}
removeLastProduct();
console.log(products);