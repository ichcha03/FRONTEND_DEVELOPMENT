// Q2. String Manipulation Report

// Original product name with extra spaces
let rawProductName = " wireless headphones PRO ";

// Step 1: trim extra spaces
let trimmedName = rawProductName.trim();

// Step 2: convert to lowercase
let lowerCaseName = trimmedName.toLowerCase();

// Step 3: capitalize first letter of each word using split(), map(), join()
let words = lowerCaseName.split(" ");
let capitalizedWords = words.map(function (word) {
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1);
});
let cleanedTitle = capitalizedWords.join(" ");

// Step 4: replace "pro" with "Pro Edition"
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

// Step 5: display cleaned title and its length
console.log("Cleaned Title:", cleanedTitle);
console.log("Title Length:", cleanedTitle.length);
