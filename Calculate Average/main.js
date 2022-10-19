// Calculate average

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function findAverage(array) {
    // your code here
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }


    if (array.length > 0) {
        let quotient = total / array.length
        return quotient
    } else {
        return 0
    }
}