const pocker = {
  patient: async (data) => {
    results = data;
    return results;
  },
};

const slave = {
  patient: async (data) => {
    results = data;
    return results;
  },
};

const controller = {
  pocker,
  slave,
};
module.exports = controller;
