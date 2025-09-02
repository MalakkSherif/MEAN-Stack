export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error: Can\'t divide by zero';
    }
    return a / b;
}

export{multiply, divide};