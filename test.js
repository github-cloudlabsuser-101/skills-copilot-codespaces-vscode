const readline = require('readline');

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the second number: ', (secondNumber) => {
        rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
            const calculator = new Calculator();
            let result;
            switch (operation) {
                case 'add':
                    result = calculator.add(Number(firstNumber), Number(secondNumber));
                    break;
                case 'subtract':
                    result = calculator.subtract(Number(firstNumber), Number(secondNumber));
                    break;
                case 'multiply':
                    result = calculator.multiply(Number(firstNumber), Number(secondNumber));
                    break;
                case 'divide':
                    result = calculator.divide(Number(firstNumber), Number(secondNumber));
                    break;
                default:
                    console.log('Invalid operation');
                    rl.close();
                    return;
            }
            console.log(`The result is: ${result}`);
            rl.close();
        });
    });
});

// Test addition
const calculator = new Calculator();
let result = calculator.add(2, 3);
console.log(result); // Expected output: 5

// Test subtraction
result = calculator.subtract(5, 3);
console.log(result); // Expected output: 2

// Test multiplication
result = calculator.multiply(4, 2);
console.log(result); // Expected output: 8

// Test division
result = calculator.divide(10, 2);
console.log(result); // Expected output: 5

// Test division by zero
try {
    result = calculator.divide(10, 0);
    console.log(result); // This line should not be reached
} catch (error) {
    console.log(error.message); // Expected output: "Cannot divide by zero"
}