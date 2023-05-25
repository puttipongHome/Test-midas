const pockerService = require("../service/pocker");

const pocker = {
  sum: async (req, res) => {
    const hand = req.body;
    console.log("🚀 ~ hand:", hand);
    let score = 0;
    const suits = {
      H: 0, // Hearts
      C: 0, // Clubs
      D: 0, // Diamonds
      S: 0, // Spades
    };
    const ranks = {
      A: 11,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      J: 10,
      Q: 10,
      K: 10,
    };
    for (let rank in ranks) {
      if (ranks[rank] === 3) {
        if (rank === "A") {
          score = 35; // A-A-A
        } else if (rank === "8" || rank === "J") {
          score = 32.5; // Other ranks
        }
        break;
      }
    }
    for (let suit in suits) {
      if (suits[suit] === 3) {
        score = suits[suit];
        break;
      }
    }
    return res.status(200).json({ results: score });
  },
  delete: async (req, res) => {
    let results = "delete";
    return res.status(200).json({ results });
  },
  muti: async (req, res) => {
    let results = "muti";
    return res.status(200).json({ results });
  },
};

const clock = {
  onepatient: async (req, res) => {
    const body = req.body;
    console.log("🚀 ~ body:", body);
    const time = body.time; // เพิ่มการกำหนดค่าตัวแปร time
    console.log("🚀 ~ time:", time);
    const results = "";
    return res.status(200).json({ results });
  },
};

const controllerPocker = {
  pocker,
  clock,
};

module.exports = controllerPocker;
