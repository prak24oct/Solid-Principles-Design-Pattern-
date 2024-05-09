// Get the current date and time
const now = new Date();

// Get the current year, month, and date
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1; // Month is zero-based, so we add 1
const currentDate = now.getDate();

console.log(`Today is ${currentYear}-${currentMonth}-${currentDate}`);

// Calculate the number of days until a specific date (e.g., Christmas)
const christmas = new Date(currentYear, 11, 25); // Month is zero-based, so December is 11
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const daysUntilChristmas = Math.ceil((christmas - now) / millisecondsPerDay);

console.log(`There are ${daysUntilChristmas} days until Christmas`);

// Format the current date using the built-in toLocaleDateString method
const formattedDate = now.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

console.log(`Today is ${formattedDate}`); // Output: Today is Thursday, April 27, 2023