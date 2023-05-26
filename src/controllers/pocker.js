const pockerService = require("../service/pocker");

const pocker = {
  sum: async (req, res) => {
    const hand = req.body.text;
    const cards = hand.split(" ");
    const score = { S: 0, C: 0, H: 0, D: 0 };
    let Total = 0;
    const inHand = [];
    const evenA = (element) => element === "A";
    const evenEight = (element) => element === "8";
    const evenJ = (element) => element === "J";

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const rank = card.slice(1);
      inHand.push(rank);
      const suit = card[0];

      if (!isNaN(rank)) {
        Total = Total + parseInt(rank) + score[suit];
      } else if (rank === "A") {
        Total = Total + 11;
      } else if (rank === "J" || "Q" || "K") {
        Total = Total + 10;
      }
    }
    if (inHand.every(evenA)) {
      Total = 35;
    } else if (inHand.every(evenEight)) {
      Total = 32.5;
    } else if (inHand.every(evenJ)) {
      Total = 32.5;
    }

    const results = Total;
    return res.status(200).json({ results });
  },
};

const clock = {
  onepatient: async (req, res) => {
    const body = req.body.text;
    const time = body;
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

const substring = {
  sub: async (req, res) => {
    const body = req.body.text;
    const subString = req.body.subString;
    const words = body;
    const commonText = subString;
    const data = words.map((word) => word.replace(commonText, ""));
    console.log("🚀 ~ data:", data);
    const results = data;
    return res.status(200).json({ results });
  },
};

const controllerPocker = {
  pocker,
  clock,
  substring,
};

module.exports = controllerPocker;
