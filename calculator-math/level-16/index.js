console.log("JAVASCRIPT");

function add(x, y) {
    const add = x + y;
    return add
}

function substract(a, b) {
    const substract = a - b;
    return substract
}

function multiply(a, b) {
    const multiply = a * b;
    return multiply
}

const result = add(substract(10, 5), multiply(10, 5));
console.log(result);