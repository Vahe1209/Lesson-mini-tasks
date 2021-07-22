class CoffeeShop {
  constructor(name, menu = []) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }
  addOrder = function (foodName) {
    let checkMenu = checkIfFoodExist(this.menu, foodName);
    if (typeof checkMenu === "object") {
      this.orders.push(checkMenu);
    } else {
      return checkMenu;
    }
  };
  listOrders = function () {
    let res = [];
    this.orders.forEach((food) => res.push(food.name));
    return res;
  };
  fulfillOrder = function () {
    let res = this.orders.shift();
    return res
      ? `The ${res.name} is ready.`
      : "All orders have been fulfilled!";
  };
  dueAmount = function () {
    let res = [];
    this.orders.forEach((item) => {
      res.push(item.price);
    });
    return res.reduce((acc, item) => acc + item, 0);
  };
  cheapestItem = function () {
    let cheapestProduct = [];
    this.menu.forEach((item) => {
      cheapestProduct.push(item.price);
    });
    return Math.min(...cheapestProduct);
  };
  drinksOnly() {
    let drinks = [];
    this.menu.forEach((item) => {
      if (item.type === "drink") {
        drinks.push(item.name);
      }
    });
    return drinks;
  }
  foodOnly() {
    let food = [];
    this.menu.forEach((item) => {
      if (item.type === "food") {
        food.push(item.name);
      }
    });
    return food;
  }
}
function checkIfFoodExist(menu, foodName) {
  let res;
  for (const iterator of menu) {
    if (iterator.name === foodName.toLowerCase()) {
      res = iterator;
    }
  }
  return res ?? '"This item is currently unavailable!"';
}

let c11 = new CoffeeShop("Vahe", [], []);
console.log(c11);
