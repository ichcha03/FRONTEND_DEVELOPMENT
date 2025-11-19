// Q3. Math Utility Dashboard

// Given number
let x = 16.75;

// Rounded value
let roundedValue = Math.round(x);

// Square root
let squareRoot = Math.sqrt(x);

// Power x^3
let powerValue = Math.pow(x, 3);

// Random number between 10–50
let randomValue = Math.floor(Math.random() * 41) + 10;

// Template literal summary
let summary = `
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value  : ${roundedValue}
Square Root    : ${squareRoot}
x^3 (Power)    : ${powerValue}
Random (10–50) : ${randomValue}
`;

console.log(summary);
