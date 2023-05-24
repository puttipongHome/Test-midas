const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function index(hand) {
  let score = 0;
  let suits = {
    H: 0, // Hearts
    C: 0, // Clubs
    D: 0, // Diamonds
    S: 0, // Spades
  };
  let ranks = {};
  // Count the number of cards in each suit and rank
  for (let card of hand) {
    let suit = card[0];
    let rank = card.substring(1);

    suits[suit]++;
    ranks[rank] = (ranks[rank] || 0) + 1;
  }

  // Check for three cards of the same suit
  for (let suit in suits) {
    if (suits[suit] === 3) {
      score = suits[suit];
      break;
    }
  }

  // Check for three cards of the same rank
  for (let rank in ranks) {
    if (ranks[rank] === 3) {
      if (rank === "A") {
        score = 35; // A-A-A
      } else {
        score = 32.5; // Other ranks
      }
      break;
    }
  }

  // Calculate the total score
  if (score === 0) {
    // No valid hand
    return "No valid hand";
  } else {
    let total = 0;
    for (let card of hand) {
      let rank = card.substring(1);
      if (rank === "A") {
        total += 11; // Aces are worth 11
      } else if (isNaN(rank)) {
        total += 10; // Face cards are worth 10
      } else {
        total += parseInt(rank); // Regular cards
      }
    }
    score += total;
    return score;
  }
}
app.get("/", (req, res) => {
  const hand = ["H8", "S8", "D8"]; // Example hand
  const score = index(hand);
  res.json({ score });
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
