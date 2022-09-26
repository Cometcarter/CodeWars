// In JavaScript, switch can replace multiple if statements.
// switch is the keyword and n is the variable to switch. case 1 means when n===1. Following the ":" you can add your code for what to do in that case. The keyword break is used as termination - if you forget break, the code will continue running through the other case statements and default until a break appears. default is always entered if you've reached it.
// 
// In some instances, the switch statement is clearer than the if..else statement.
// 
// For example, we can write a function to calculate what day today is, like this:
// Task
// Complete the function howManydays. It accepts 1 parameter month, which means the month of the year. Different months have a different number of days as shown in the table below. Return the number of days that are in month. There is no need for input validation: month will always be greater than 0 and less than or equal to 12.



function howManydays(month) {
    let days;
    switch (month) {
        case 2:
            days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            days = 31;
    }
    return days;
}