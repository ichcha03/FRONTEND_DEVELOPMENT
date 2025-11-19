// Q1. Scope Conflict Resolver

// Global variable
let bonus = 5000;

// Function with local scope
function calculateSalary(isPermanent) {
  // Local salary variable
  let salary = 40000;
  let totalSalary = salary;

  // Add bonus only if employee is permanent
  if (isPermanent === true) {
    totalSalary = salary + bonus;
  }

  // Print total salary inside the function
  console.log("Is Permanent:", isPermanent, "| Total Salary:", totalSalary);
  console.log("Global Bonus (unchanged):", bonus);
}

// Demonstration: changing isPermanent does not change global bonus
calculateSalary(true);
calculateSalary(false);
