// Functional Programing
// Amazon shopping exercise
const user = {
  name: "Kim",
  active: true,
  cart: [],
  purchases: [],
};

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

function addItem(user){
    user.cart.push({itemName: "Shoes", price: 100});
    return user;
}

function addTax(user){
    user.cart.map(item => {
        item.price = item.price * 1.03;
    });
    return user;
}

function buyItem(user){
    user.purchases.push(user.cart);
    user.cart = [];
    return user;
}