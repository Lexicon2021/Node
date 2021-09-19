
// Say name
function sayName(name) {
    return 'Tja ' + name + ', hur mår du idag?';
}

// Show age
function showAge (age) {
    return 'You are ' + age + ' years old.';
}
// Calculate numbers
function calc(num1, num2) {
    return num1 * num2;
}

// Genomsnitt module



function genomSnitt(num1,num2) {
    return (num1+num2) / 2;
}

exports.name = { sayName, showAge, calc, genomSnitt };