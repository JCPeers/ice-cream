const stocks = {
  fruits: ["apple", "banana", "mango", "peach"],
  liquid: ["water", "ice", "milk"],
  holder: ["cone", "tub", "stick"],
  toppings: ["chocolate", "nuts", "sprinkles"],
};

let shopOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Sorry the shop is closed"));
    }
  });
};

order(2000, () =>
  console.log(`The fruit ${stocks.fruits[0]} has been selected`)
)
  .then(() => {
    return order(0000, () => console.log("The production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruit was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(
        `The ${stocks.liquid[1]} and ${stocks.liquid[2]} has been added`
      )
    );
  })
  .then(() => {
    return order(1000, () => console.log("The ice cream machine has started"));
  })
  .then(() => {
    return order(2000, () =>
      console.log(`The customer has selected the ${stocks.holder[0]}`)
    );
  })
  .then(() => {
    return order(3000, () =>
      console.log(
        `The customer has selected the following toppings: ${stocks.toppings[0]} and ${stocks.toppings[1]}`
      )
    );
  })
  .then(() => {
    return order(2000, () => console.log("The ice cream is ready. Enjoy!"));
  });

// console.log(stocks.fruits[1])

// const order = (fruitsName, callProduction) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruitsName]} was selected`);
//     callProduction();
//   }, 2000);
// };

// const production = () => {
//   setTimeout(() => {
//     console.log("production has started");

//     setTimeout(() => {
//       console.log(`The fruit has been chopped`);

//       setTimeout(() => {
//         console.log(
//           `the ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`
//         );
//         setTimeout(() => {
//           console.log("The machine has started to make the ice-cream!");

//           setTimeout(() => {
//             console.log(`I will put your ice-cream in a ${stocks.holder[1]} `);

//             setTimeout(() => {
//               console.log(
//                 `Some ${stocks.toppings[0]} and ${stocks.toppings[1]} will be put on top of your ice-cream!`
//               );

//               setTimeout(() => {
//                 console.log("Your ice-cream is ready! Come again, Thank you!");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0000);
// };

// order(2, production);
