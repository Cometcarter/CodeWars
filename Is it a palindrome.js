// 8 kyu
// Is it a palindrome?
// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let lowerc = x.toLowerCase()
    let revX = lowerc.split('').reverse().join('')

    //   let revX = x.reverse()
    return (lowerc == revX ? true : false)

}