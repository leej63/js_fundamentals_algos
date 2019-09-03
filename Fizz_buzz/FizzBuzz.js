function fizzBuzz(n){
    var resultString = "";
    if(n < 1){
        return console.log("Parameter must be a positive number");
    }
    for(var i = 1; i < n + 1; i++){
        if(i % 15 == 0)
            resultString += "FizzBuzz, ";
        else if(i % 3 == 0){
            resultString += "Fizz, ";
        }
        else if(i % 5 == 0){
            resultString += "Buzz, ";
        }
        else{
            resultString = resultString + i + ", ";
        }
    }
    for( var i = 0; i <= n; i++){
        if(i == n){
            resultString +="and " + "FizzBuzz.";
        }
    }
    return console.log(resultString);
}

fizzBuzz(15)

// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

// BONUS 1: Validate the user input. If the function is not passed a positive number, either throw an error or return null.
// BONUS 2: Rather than have the function log each element, return a nicely formatted string with all the elements. Include commas where appropriate to make it easier to read.