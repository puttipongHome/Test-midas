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
    const body = req.body.text;
    const time = body; // เพิ่มการกำหนดค่าตัวแปร time
    const [hours, minutes] = time.split(":").map(Number);
    const hourAngle = (hours % 12) * 30 + (minutes / 60) * 30;
    const minuteAngle = (minutes / 60) * 360;
    let angle = Math.abs(hourAngle - minuteAngle);
    if (angle > 180) {
      angle = 360 - angle;
    }
    console.log("🚀 ~ angle:", angle);
    const results = angle;
    return res.status(200).json({ results });
  },
};

const controllerPocker = {
  pocker,
  clock,
};

module.exports = controllerPocker;
