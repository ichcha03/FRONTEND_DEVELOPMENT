// Q6. Event-Based Counter Simulation

// Global counter variable
let count = 0;

// Increment function
function increment() {
  // Nested function to show function scope of count updates
  function logCount() {
    console.log("Current Count (Increment):", count);
  }

  count = count + 1;
  logCount();
}

// Decrement function
function decrement() {
  // Nested function to show function scope of count updates
  function logCount() {
    console.log("Current Count (Decrement):", count);
  }

  count = count - 1;
  logCount();
}

// Simulated "clicks" by calling functions
increment();
increment();
decrement();
increment();
