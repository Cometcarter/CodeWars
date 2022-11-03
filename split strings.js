// 6 kyu
// Split Strings

// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str) {
    let array = str.split('')
    let newarray = []
    for (let i = 0; i < array.length; i += 2) {
        if (array[i + 1]) {
            newarray.push(array[i] + array[i + 1])
        } else {
            newarray.push(array[i] + '_')
        }
    }
    return newarray
}