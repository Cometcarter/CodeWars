// Even or Odd
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 === 0) {
        return ("Even");
    } else {
        return ("Odd");
    }
}
// ==========================================================================================

// Opposite number

// Very simple, given an integer or a floating-point number, find its opposite.
// 
// Examples:
// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return -number
}
// ==========================================================================================

// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// 
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"


function numberToString(num) {
    // Return a string of the number here!
    return num.toString();
}
// ==========================================================================================

// Convert boolean values to strings 'Yes' or 'No'.

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
    //...
    const str = bool === true ? "Yes" : "No"
    return str
}
// ==========================================================================================

// Reversed Strings
// Complete the solution so that it reverses the string passed into it.
// 
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split('').reverse().join('');
}