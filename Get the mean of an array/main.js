
// 8 kyu
// Get the mean of an array

// DESCRIPTION:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

//TODO : calculate the downward rounded average of the marks array
//  let total = 0
// for(let i = 0; i < marks.length; i++) {
//    let total += marks[i]
// }
// return total / marks.length

getAverage = marks => Math.floor(marks.reduce((prev, curr) => prev + curr) / marks.length)