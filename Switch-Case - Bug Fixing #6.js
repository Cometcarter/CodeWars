// 8 kyu
// Switch/Case - Bug Fixing #6

// DESCRIPTION:
// Oh no! Timmy's evalObject function doesn't work. He uses Switch/Cases to evaluate the given properties of an object, can you fix timmy's function?

function evalObject(value) {
    var result;
    switch (value.operation) {
        case '+': result = value.a + value.b
            break;
        case '-': result = value.a - value.b
            break;
        case '/': result = value.a / value.b
            break;
        case '*': result = value.a * value.b
            break;
        case '%': result = value.a % value.b
            break;
        case '^': result = Math.pow(value.a, value.b);
        default:
            'egg'
    }
    return result;
}