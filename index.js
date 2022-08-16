const stocks = {
  fruits: ["apple", "banana", "mango", "peach"],
  liquid: ["water", "ice", "milk"],
  holder: ["cone", "tub", "stick"],
  toppings: ["chocolate", "nuts", "sprinkles"],
};

// console.log(stocks.fruits[1])

const order = (fruitsName, callProduction) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruitsName]} was selected`);
    callProduction();
  }, 2000);
};

const production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log(`The fruit has been chopped`);
    }, 2000);
  }, 0000);
};

order(2, production);
