// 8 kyu
// Training JS #4: Basic data types--Array

// DESCRIPTION:
// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function getLength(arr) {
    //return length of arr
    return arr.length
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0]
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1]
}
function pushElement(arr) {
    var el = 1;
    arr.push(el)
    //push el to arr
    return arr
}
function popElement(arr) {
    //pop (remove last element from arr)
    arr.pop()
    return arr
}