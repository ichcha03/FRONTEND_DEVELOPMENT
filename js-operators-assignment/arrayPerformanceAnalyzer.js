// Q4. Array Performance Analyzer

// Create an array of 8 random scores between 30 and 100
let scores = [];
for (let i = 0; i < 8; i++) {
  let score = Math.floor(Math.random() * 71) + 30;
  scores.push(score);
}

// Highest and lowest score
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Average score using reduce()
let totalScore = scores.reduce(function (sum, current) {
  return sum + current;
}, 0);
let averageScore = totalScore / scores.length;

// Number of students who passed (≥ 50) using filter()
let passedStudents = scores.filter(function (score) {
  return score >= 50;
}).length;

// Formatted summary
let result = `
Array Performance Analyzer
--------------------------
Scores         : ${scores.join(", ")}
Highest Score  : ${highestScore}
Lowest Score   : ${lowestScore}
Average Score  : ${averageScore}
Passed Students: ${passedStudents}
`;

console.log(result);
