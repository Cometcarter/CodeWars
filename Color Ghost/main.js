// 8 kyu
// Color Ghost

// Create a class Ghost
// Ghost objects are instantiated without any arguments.
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

var Ghost = function () {
    // your code goes here
    let colors = ["white", "yellow", "red", "purple"]
    const colorIndex = [Math.floor(Math.random() * 4)]
    this.color = colors[colorIndex]
};