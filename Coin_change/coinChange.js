// Write a function that creates and returns an object.
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
// Example: coinChange(312) returns > {dollars: 3, dimes: 1, pennies: 2}
// Example: coinChange(78) returns > {quarters: 3, pennies: 3}

function coinChange(cents){
    var result = {};
    var remainder = cents;
    while(remainder != 0){
        if(remainder >= 100){
            result['dollars'] = Math.floor(remainder/100);
            remainder = remainder % 100;
        }
        else if(remainder >= 25){
            result['quarters'] = Math.floor(remainder/25);
            remainder = remainder % 25;
        }
        else if (remainder >= 10){
            result['dimes'] = Math.floor(remainder/10);
            remainder = remainder %10;
        }
        else{
            result['pennies'] = remainder;
            remainder = 0;
        }
    }
    return result;
}

console.log(coinChange(464));



