// Q7. Customer Feedback Processor

// Feedback string
let feedback =
  "Great product! Fast delivery and amazing sound quality!";

// Count words using split()
let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

// Check if feedback includes "bad" or "poor"
let hasBad = feedback.toLowerCase().includes("bad");
let hasPoor = feedback.toLowerCase().includes("poor");

// Decide feedback type
if (!hasBad && !hasPoor) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}

// Display word count
console.log("Word Count:", wordCount);
