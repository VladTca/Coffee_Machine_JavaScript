// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// Starting to make a coffee
// Grinding coffee beans
// Boiling water
// Mixing boiled water with crushed coffee beans
// Pouring coffee into the cup
// Pouring some milk into the cup
// Coffee is ready!

// console.log("Starting to make a coffee")
//
// console.log("Grinding coffee beans")
//
// console.log("Boiling water")
//
// console.log("Mixing boiled water with crushed coffee beans")
//
// console.log("Pouring coffee into the cup")
//
// console.log("Pouring some milk into the cup")
//
// console.log("Coffee is ready!")

// const cupsAmount = input("Write how many cups of coffee you will need: ");
//
// console.log("For " + cupsAmount + " cups of coffee you will need:");
// console.log(cupsAmount * 200 + " ml of water");
// console.log(cupsAmount * 50 + " ml of milk");
// console.log(cupsAmount * 15 + " g of coffee beans");

// const waterAmount = Number(input("Write how many ml of water the coffee machine has: "));
//
// const milkAmount = Number(input("Write how many ml of milk the coffee machine has: "));
//
// const coffeeBeansAmount = Number(input("Write how many grams of coffee beans the coffee machine has: "));
//
// const cupsRequired = Number(input("Write how many cups of coffee you will need: "));
//
//
// const waterPerCup = 200; // ml
// const milkPerCup = 50;  // ml
// const coffeeBeansPerCup = 15; // grams
//
// function calculateMaxCups(water, milk, coffeeBeans) {
//     const maxCupsWater = Math.floor(water / waterPerCup);
//     const maxCupsMilk = Math.floor(milk / milkPerCup);
//     const maxCupsBeans = Math.floor(coffeeBeans / coffeeBeansPerCup);
//
//     return Math.min(maxCupsWater, maxCupsMilk, maxCupsBeans);
// }
//
// const maxCups = calculateMaxCups(waterAmount, milkAmount, coffeeBeansAmount);
// if (maxCups >= cupsRequired) {
//     if (maxCups > cupsRequired) {
//         console.log(`Yes, I can make that amount of coffee (and even ${maxCups - cupsRequired} more than that)`);
//     } else {
//         console.log("Yes, I can make that amount of coffee");
//     }
// } else {
//     console.log(`No, I can make only ${maxCups} cups of coffee`);
// }

// Initial state
// let money = 550;
// let water = 400; // in ml
// let milk = 540; // in ml
// let coffeeBeans = 120; // in grams
// let cups = 9;
//
// // Coffee recipes and prices
// const recipes = {
//     espresso: { water: 250, coffeeBeans: 16, milk: 0, price: 4 },
//     latte: { water: 350, coffeeBeans: 20, milk: 75, price: 7 },
//     cappuccino: { water: 200, coffeeBeans: 12, milk: 100, price: 6 }
// };
//
// // Display current state
// function displayState() {
//     console.log("The coffee machine has:");
//     console.log(`${water} ml of water`);
//     console.log(`${milk} ml of milk`);
//     console.log(`${coffeeBeans} g of coffee beans`);
//     console.log(`${cups} disposable cups`);
//     console.log(`$${money} of money`);
// }
//
// // Handle buying coffee
// function buyCoffee(type) {
//     const recipe = Object.values(recipes)[type - 1];
//     if (recipe) {
//         if (water >= recipe.water && milk >= recipe.milk && coffeeBeans >= recipe.coffeeBeans && cups > 0) {
//             water -= recipe.water;
//             milk -= recipe.milk;
//             coffeeBeans -= recipe.coffeeBeans;
//             cups -= 1;
//             money += recipe.price;
//             console.log(`I have enough resources, making you a ${Object.keys(recipes)[type - 1]}.`);
//         } else {
//             console.log("Sorry, not enough resources.");
//         }
//     } else {
//         console.log("Invalid coffee type.");
//     }
// }
//
// // Handle filling supplies
// function fillSupplies(waterAdd, milkAdd, coffeeBeansAdd, cupsAdd) {
//     water += waterAdd;
//     milk += milkAdd;
//     coffeeBeans += coffeeBeansAdd;
//     cups += cupsAdd;
//     console.log("Supplies have been added.");
// }
//
// // Handle taking money
// function takeMoney() {
//     console.log(`I gave you $${money}`);
//     money = 0; // Empty the money
// }
//
// // Main program loop
// function coffeeMachine() {
//     displayState();
//
//     const action = input("Write action (buy, fill, take):").toLowerCase();
//
//     if (action === "buy") {
//         const coffeeType = Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:"));
//         buyCoffee(coffeeType);
//     } else if (action === "fill") {
//         const waterAdd = Number(input("Write how many ml of water you want to add:"));
//         const milkAdd = Number(input("Write how many ml of milk you want to add:"));
//         const coffeeBeansAdd = Number(input("Write how many grams of coffee beans you want to add:"));
//         const cupsAdd = Number(input("Write how many disposable cups you want to add:"));
//         fillSupplies(waterAdd, milkAdd, coffeeBeansAdd, cupsAdd);
//     } else if (action === "take") {
//         takeMoney();
//     } else {
//         console.log("Invalid action.");
//     }
//
//     displayState();
// }
//
// // Run the coffee machine simulation
// coffeeMachine();
let money = 550;
let water = 400; // in ml
let milk = 540; // in ml
let coffeeBeans = 120; // in grams
let cups = 9;

// Coffee recipes and prices
const recipes = {
    espresso: { water: 250, coffeeBeans: 16, milk: 0, price: 4 },
    latte: { water: 350, coffeeBeans: 20, milk: 75, price: 7 },
    cappuccino: { water: 200, coffeeBeans: 12, milk: 100, price: 6 }
};

// Display current state
function displayState() {
    console.log("The coffee machine has:");
    console.log(`${water} ml of water`);
    console.log(`${milk} ml of milk`);
    console.log(`${coffeeBeans} g of coffee beans`);
    console.log(`${cups} disposable cups`);
    console.log(`$${money} of money`);
}

// Handle buying coffee
function buyCoffee(type) {
    const coffeeTypes = ["espresso", "latte", "cappuccino"];
    const recipe = recipes[coffeeTypes[type - 1]];

    if (!recipe) {
        console.log("Invalid coffee type.");
        return;
    }

    if (water < recipe.water) {
        console.log(`Sorry, not enough water!`);
        return;
    }

    if (milk < recipe.milk) {
        console.log(`Sorry, not enough milk!`);
        return;
    }

    if (coffeeBeans < recipe.coffeeBeans) {
        console.log(`Sorry, not enough coffee beans!`);
        return;
    }

    if (cups <= 0) {
        console.log(`Sorry, not enough disposable cups!`);
        return;
    }

    // If resources are sufficient
    water -= recipe.water;
    milk -= recipe.milk;
    coffeeBeans -= recipe.coffeeBeans;
    cups -= 1;
    money += recipe.price;

    console.log("I have enough resources, making you a coffee!");
}

// Handle filling supplies
function fillSupplies(waterAdd, milkAdd, coffeeBeansAdd, cupsAdd) {
    if (waterAdd < 0 || milkAdd < 0 || coffeeBeansAdd < 0 || cupsAdd < 0) {
        console.log("Invalid input. Please enter non-negative values.");
        return;
    }
    water += waterAdd;
    milk += milkAdd;
    coffeeBeans += coffeeBeansAdd;
    cups += cupsAdd;
    console.log("Supplies have been added.");
}

// Handle taking money
function takeMoney() {
    console.log(`I gave you $${money}`);
    money = 0; // Empty the money
}

// Log actions
function logAction(action) {
    console.log(`Action performed: ${action}`);
}

// Main program loop
function coffeeMachine() {
    while (true) {
        displayState();
        logAction("Displaying state");

        const action = input("Write action (buy, fill, take, remaining, exit):").toLowerCase();

        if (action === "remaining") {
            displayState();
            logAction("Remaining");
        } else if (action === "buy") {
            while (true) {
                const coffeeType = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:").toLowerCase();
                if (coffeeType === "back") break;

                const type = Number(coffeeType);
                if (type >= 1 && type <= 3) {
                    buyCoffee(type);
                    logAction(`Bought ${type}`);
                    break;
                } else {
                    console.log("Invalid option, please select again or type 'back' to return to main menu.");
                }
            }
        } else if (action === "fill") {
            const waterAdd = Number(input("Write how many ml of water you want to add:"));
            const milkAdd = Number(input("Write how many ml of milk you want to add:"));
            const coffeeBeansAdd = Number(input("Write how many grams of coffee beans you want to add:"));
            const cupsAdd = Number(input("Write how many disposable cups you want to add:"));
            fillSupplies(waterAdd, milkAdd, coffeeBeansAdd, cupsAdd);
            logAction("Filled supplies");
        } else if (action === "take") {
            takeMoney();
            logAction("Took money");
        } else if (action === "exit") {
            console.log("Exiting the coffee machine.");
            logAction("Exiting");
            break;
        } else {
            console.log("Invalid action. Please try again.");
        }
    }
}

// Run the coffee machine simulation
coffeeMachine();
