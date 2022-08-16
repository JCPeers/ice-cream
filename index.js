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

      setTimeout(() => {
        console.log(
          `the ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`
        );
        setTimeout(() => {
          console.log("The machine has started to make the ice-cream!");

          setTimeout(() => {
            console.log(`The ${stocks.holder[1]} has been selected`);

            setTimeout(() => {
              console.log(`The ${stocks.toppings[0]} has been selected`);

              setTimeout(() => {
                console.log("Your ice-cream is ready! Come again, Thank you!");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(2, production);
