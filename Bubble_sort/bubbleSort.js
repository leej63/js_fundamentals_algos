function bubbleSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        for(var j = 0; j < arr.length - i; j++){
            var currentNum = arr[j];
            var nextNum = arr[j+1];
            if(currentNum > nextNum){
                arr.splice(j, 2, nextNum, currentNum);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([10,5,1,4,3,2,9,7,6,8]));

// Classify each of the following functions according to their Big O Time complexity:
// #1
function printArray(arr){
        for(var i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }
// O(n)

// #2
function findNth(arr, n){
        console.log(arr[n]);
    }
// O(1)


// #3
function halving(n){
        var count = 0;
        while(n > 1){
            n = n/2;
            count++;
        }
        return count;
    }
// O(n)

// #4
function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// O(n^2)

// O(1) - The time rquired remains the same. Consider getting an element at a given position in an array.
// O(n) - The time required experiences linear growth as the input size increases. Consider a for-loop.
// O(n^2) - The time required experiences quadratic g rowth as the input size increases. Consider nested for-loops.