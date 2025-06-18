const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}