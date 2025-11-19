// Q9. Odd–Even Number Analyzer

// Array to store numbers 1–30
let numbers = [];

// Accept numbers 1–30 using a loop
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

// Array to store analysis results
let results = [];

// Classify each number and store result
for (let i = 0; i < numbers.length; i++) {
  let n = numbers[i];

  if (n % 3 === 0 && n % 5 === 0) {
    results.push("FizzBuzz");
  } else if (n % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

// Display the result array
console.log("Numbers:", numbers);
console.log("Results:", results);
