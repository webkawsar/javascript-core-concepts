

// JavaScript Constructor Function
// normal function always verb hobe (convention)
// constructor function verb hobe na

function Product(name, price) {
    
    this.name = name;
    this.price = price;
    this.description = function() {
        return this.name + ' - $' + this.price;
    }

}

const product1 = new Product('School Bag', 120);
const product2 = new Product('School Shoes', 120);

console.log(product1, 'product1');
console.log(product2, 'product2');




