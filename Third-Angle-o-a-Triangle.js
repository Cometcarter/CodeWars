// Description
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

function otherAngle(a, b) {
    let total = 180;
    let thirdAngle = (total - a) - b
    return thirdAngle;
}