/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
  {
    name: 'cherries',
    price: '$5.99',
    quantity: 1,
    productId: 10001,
    image: 'cd2073-intro-to-js-1-project-starter-main/starter/src/images/cherry.jpg'
  },
  {
    name: 'oranges',
    price: '$4.99',
    quantity: 1,
    productId: 10002,
    image: 'cd2073-intro-to-js-1-project-starter-main/starter/src/images/orange.jpg'
  },
  {
    name: 'strawberries',
    price: '$3.99',
    quantity: 1,
    productId: 10003,
    image: 'cd2073-intro-to-js-1-project-starter-main/starter/src/images/strawberry.jpg'
  }
]
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/


function findProductByID(productId) {
  return products.find(product => product.productId === productId);
}

function isItemInCart(productId) {
  return cart.some(cartItem => cartItem.productId === productId);
}

function addProductToCart(productId) {
  const singleItem = findProductByID(productId)
  const inCart = isItemInCart(productId)
  
  if (inCart) {
    singleItem.quantity += 1;
  } else if (singleItem && !inCart) {
    cart.push(singleItem);
  } else {
    console.log("Item not found, enter valid item.");
  }
}
addProductToCart(10003);
addProductToCart(10003); 

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  //Find the product in the products array
  const productsToAdd = findProductByID(productId);
  //Check if the product exists in the cart
  const productsExists = isItemInCart(productId);

    if (productsExists && productsToAdd) {
    productsToAdd.quantity += 1; 
    } else {
    console.log("Product not found.");
  }    
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const lookForProduct = findProductByID(productId);
  const isProductInCart = isItemInCart(productId);
  if (isProductInCart && lookForProduct) {
    productsToAdd.quantity -= 1; 
  } else {
    console.log("Product not found.");
  }   
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
    const remSingleItem = findProductByID(productId)
    const remFromCart = isItemInCart(productId)
    
    if (remSingleItem && remFromCart && singleItem.quantity > 1) {
      singleItem.quantity -= 1;
    } else if (singleItem && inCart && singleItem.quantity === 1) {
      cart.splice(singleItem);
    } else {
      console.log("Item not found in cart.");
    }
  }


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal () {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += parseFloat(cart[i].price.slice(1)) * cart[i].quantity; //converts string to integer and multiplies integers
  }
  let fixedTotal = total.toFixed(2)
  return fixedTotal;
}


/* Create a function called emptyCart that empties the products from the cart */
function emptyCart () {
  for (let i = cart.length; i > 0; i--) {
    let removedItem = cart.pop();
    console.log(removedItem);
  }
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(paymentAmount) {
 let difference = cartTotal() - paymentAmount;
  if (difference > 0) {
    console.log(`Incorrect payment received. You still owe $${difference } to complete the transaction`);
    return difference;
  } else if (difference === 0) {
    console.log("Thank you for your payment, have a great day.");
  } else {
    console.log(`You have given us too much payment. Your change is: ${difference}`);
    return difference;
  }
}
pay(5.99);
console.log(difference);
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/
//none of the tests would run the entire time I did the project. I don't believe I deleted any lines - so I just had to go by the rubrik

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
