// Deposit some money
// No of lines
// Collect the amount
// Spin the machine
// Check if won
// Return the money
// Play again 

const prompt = require("prompt-sync")();









const deposit = () => {
    while (true) {
    const depositamount = prompt("Enter the amount you wish to deposit: ");
    const numberdepositamount = parseFloat(depositamount);

    if(isNaN(numberdepositamount) || numberdepositamount <= 0) {
        console.log("Invalid amount, try again");
    } else {
        return numberdepositamount;
    }
};
};
const lines = () => {
    while (true) {
    const nooflines = prompt("Enter the lines you wish to bet on (1-3): ");
    const numbernooflines = parseFloat(nooflines);

    if(isNaN(numbernooflines) || numbernooflines < 1 || numbernooflines > 3) {
        console.log("Invalid no of lines, try again");
    } else {
        return numbernooflines;
    }
};
};
let balance = deposit();
const nooflines = lines();

const getbet = (balance, nooflines) => {
    while (true){
        const bet = prompt("Enter the amount you want to bet on: ");
        const numbet = parseFloat(bet)

        if(isNaN(bet) || bet <= 0 || bet > balance/nooflines){
            console.log("Try again, that is not right");
        } else {
            return numbet
        }

    }
};

const bet = getbet(balance,nooflines);


console.log(balance)
console.log(nooflines)
console.log(bet)