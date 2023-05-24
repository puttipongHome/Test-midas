const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
module.exports = app;
