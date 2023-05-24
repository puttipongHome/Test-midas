const pockerService = require("../service/pocker");

const pocker = {
  sum: async (req, res) => {
    let results = "sum";

    return res.status(200).json({ results });
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

const example = {
  onepatient: async (req, res) => {
    const body = req.body;
    let results = pockerService.pocker.patient(body);
    return res.status(200).json({ results });
  },
};
const controllerPocker = {
  pocker,
  example,
};

module.exports = controllerPocker;
