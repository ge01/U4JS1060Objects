var product = {
  name: 'Tesla',
  price: 40000,
  print: function(){
    console.log(this.name + 'costs $ ' + this.price);
  },
  calculateTax: function(taxRate){
    return this.price * taxRate;
  }
};
console.log('Product name= ' + product.name);
console.log('Product price= ' + product.price);

console.log('Product name= ' + typeof product.name); // displays string
console.log('Product price= ' + typeof product.price); // displays number

product.print();

var tax = product.calculateTax(0.08); // calculate 8% tax rate
console.log(tax);
