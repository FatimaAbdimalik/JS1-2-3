/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

*/

class ShoppingCart {
  // Add your code here
  constructor() {
    this.myShoppingCartItems = [];
  }
  addItem(item) {
    this.myShoppingCartItems.push(item);
  }

  cartContains() {
    console.log(` my cart has ${this.myShoppingCartItems}`);
  }
}

let myCart = new ShoppingCart(); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
