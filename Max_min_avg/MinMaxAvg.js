function minMaxAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i]
        }
        sum += arr[i];
    }
    console.log("The minimum is " + min + ", the maximum is " + max + ", and the average is " + sum/arr.length + ".");
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + sum/arr.length + ".";
}

var arrOne = [1, -2, 9, 4];
minMaxAvg(arrOne);

// Write a function that takes an arr of numbers as parameters. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.
// Example maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."